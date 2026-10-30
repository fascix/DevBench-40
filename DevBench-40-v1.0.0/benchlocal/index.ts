import {
  createHostHelpers, defineBenchPack, loadBenchPackManifest, requireScoredResults,
  type ScenarioRunInput, type ScenarioResult, type ProgressEmitter
} from "@benchlocal/sdk";
import scenarios from "../lib/scenarios.json";

const manifest = loadBenchPackManifest(__dirname);
const categories = [...new Set(scenarios.map((s) => s.category))];

function scoreText(text: string, scenario: (typeof scenarios)[number]) {
  const lower = text.toLowerCase();
  const signals = scenario.signals.filter((signal) => lower.includes(signal.toLowerCase())).length;
  const signalScore = signals / scenario.signals.length;
  const hasConcrete = /```|function |class |def |interface |select |create table|dockerfile|yaml|json|pseudo|étape|architecture/i.test(text);
  const hasTests = /test|assert|expect|cas limite|edge case|pytest|jest|vitest|junit/i.test(text);
  const hasRobustness = /error|erreur|exception|timeout|sécurité|security|validation|retry|rollback|transaction/i.test(text);
  const hasTradeoffs = /compromis|trade.off|hypothèse|assumption|limite|limitation|complexité/i.test(text);
  return Math.max(0, Math.min(1,
    0.50 * signalScore +
    0.20 * Number(hasConcrete) +
    0.15 * Number(hasTests) +
    0.10 * Number(hasRobustness) +
    0.05 * Number(hasTradeoffs)
  ));
}

async function callModel(input: ScenarioRunInput, helpers: ReturnType<typeof createHostHelpers>, prompt: string) {
  const provider = helpers.getRequiredProvider(input.model.provider, { enabledOnly: true });
  const apiKey = helpers.getSecretValue(input.model.provider);
  const baseUrl = provider.baseUrl.replace(/\/+$/, "");
  const url = /\/v1$/.test(baseUrl) ? `${baseUrl}/chat/completions` : `${baseUrl}/v1/chat/completions`;
  const timeoutMs = (input.generation?.request_timeout_seconds ?? 300) * 1000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
      },
      body: JSON.stringify({
        model: input.model.model,
        messages: [
          { role: "system", content: "Tu es un ingénieur logiciel senior. Réponds de façon concrète, structurée, techniquement exacte et adaptée à la stack demandée. N'invente pas de tests exécutés. Signale tes hypothèses." },
          { role: "user", content: prompt }
        ],
        temperature: input.generation?.temperature ?? 0
      }),
      signal: controller.signal
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`Provider HTTP ${response.status}: ${JSON.stringify(body).slice(0, 1200)}`);
    const answer = body?.choices?.[0]?.message?.content;
    if (typeof answer !== "string" || !answer.trim()) throw new Error("Réponse vide ou format chat/completions non reconnu.");
    return answer;
  } finally {
    clearTimeout(timer);
  }
}

export { manifest };
export default defineBenchPack({
  manifest,
  async listScenarios() {
    return scenarios.map((s) => ({
      id: s.id, title: s.title, category: s.category,
      description: `${s.level.toUpperCase()} · ${s.prompt}`,
      detailCards: [
        { title: "Compétence évaluée", content: s.category },
        { title: "Niveau indicatif", content: s.level },
        { title: "Consigne", content: s.prompt },
        { title: "Évaluation", content: "Grille automatisée de complétude; consulter la méthodologie et les logs." }
      ]
    }));
  },
  async prepare(context) {
    const helpers = createHostHelpers(context);
    return {
      async runScenario(input: ScenarioRunInput, emit: ProgressEmitter): Promise<ScenarioResult> {
        const scenario = scenarios.find((s) => s.id === input.scenario.id);
        if (!scenario) throw new Error(`Scénario inconnu: ${input.scenario.id}`);
        const prompt = [
          `BENCHMARK DEVBench-40 — ${scenario.id}: ${scenario.title}`,
          `Catégorie: ${scenario.category} | Niveau indicatif: ${scenario.level}`,
          scenario.prompt,
          "",
          "Contraintes de réponse:",
          "1. Indique les hypothèses et la stack choisie.",
          "2. Donne une solution concrète (code, pseudo-code, schéma ou étapes opérables selon le sujet).",
          "3. Décris les tests et cas limites.",
          "4. Couvre les erreurs, la sécurité et la robustesse pertinentes.",
          "5. Explique les compromis et limites.",
          "Ne prétends pas avoir exécuté le code ou les tests."
        ].join("\n");
        const startedAt = new Date().toISOString();
        await emit({ type: "model_progress", modelId: input.model.id, scenarioId: scenario.id, message: `Évaluation ${scenario.id} — ${scenario.title}` });
        const answer = await callModel(input, helpers, prompt);
        const score = scoreText(answer, scenario);
        const status = score >= 0.75 ? "pass" : score >= 0.45 ? "partial" : "fail";
        const completedAt = new Date().toISOString();
        return {
          scenarioId: scenario.id, status, score,
          summary: `${scenario.title}: ${(score * 100).toFixed(0)}/100 (heuristique de complétude; voir méthodologie).`,
          rawLog: JSON.stringify({ scenarioId: scenario.id, category: scenario.category, level: scenario.level, prompt, answer, score, signals: scenario.signals }, null, 2),
          timings: { startedAt, completedAt }
        };
      },
      async dispose() {}
    };
  },
  scoreModelResults(results: ScenarioResult[]) {
    const scored = requireScoredResults(results);
    const categoryScores = categories.map((category) => {
      const subset = scored.filter((result) => scenarios.find((s) => s.id === result.scenarioId)?.category === category);
      const average = subset.length ? subset.reduce((sum, item) => sum + item.score, 0) / subset.length : 0;
      return { id: category.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label: category, score: average * 100, weight: 1 / categories.length };
    });
    const totalScore = categoryScores.reduce((sum, category) => sum + category.score * (category.weight ?? 0), 0);
    return { totalScore, categories: categoryScores, summary: `DevBench-40 · ${scored.length}/40 scénarios notés · score moyen équilibré par catégorie.` };
  }
});
