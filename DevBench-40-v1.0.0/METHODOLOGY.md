# DevBench-40 — Méthodologie

## But
Évaluer la qualité d'un assistant de développement logiciel sur des tâches réalistes et multi-stacks, plutôt que sur la seule génération de snippets.

## Plan
40 scénarios immuables dans 8 catégories équilibrées (5 par catégorie). Chaque catégorie couvre des niveaux junior, intermédiaire et senior. Les tâches acceptent plusieurs langages et frameworks : le modèle doit choisir une stack cohérente et signaler ses hypothèses.

## Protocole d'exécution
- Même prompt de base et mêmes contraintes pour chaque modèle.
- Température recommandée : 0.
- Une génération par scénario; pas d'outils ni de conversation multi-tour dans cette version.
- Le prompt demande une réponse structurée en : approche/hypothèses, solution ou conception, tests/validation, risques/compromis.
- Les sorties brutes sont conservées dans les logs de scénario BenchLocal.

## Barème automatisé
Chaque scénario reçoit une note normalisée de 0 à 1, construite à partir de :
- 50 % : signaux spécifiques à la catégorie (présence d'éléments clés attendus);
- 20 % : présence d'une solution concrète (code, pseudo-code, schéma ou étapes opérables);
- 15 % : tests, cas limites ou stratégie de validation;
- 10 % : gestion des erreurs, sécurité ou robustesse;
- 5 % : explication des hypothèses et compromis.

Les signaux sont des vérifications textuelles déterministes, insensibles à la casse. Ils constituent un proxy de complétude et non une preuve de correction sémantique. Les formulations alternatives peuvent être sous-notées; les mots-clés présents sans raisonnement réel peuvent être sur-notés.

## Score global
Les 8 catégories ont le même poids. Le score global est la moyenne des pourcentages de catégorie. Les scénarios ont le même poids à l'intérieur de leur catégorie. Le classement doit être lu avec les logs, pas isolément.

## Reproductibilité et limites
- Identifiants et prompts versionnés dans `lib/scenarios.json`.
- Température 0 par défaut.
- Pas d'appel réseau externe autre que le fournisseur LLM déjà configuré dans BenchLocal.
- Aucun code généré n'est exécuté.
- Les scores ne remplacent pas une revue humaine ni des tests d'exécution.
- Pour une comparaison scientifique, conserver la version du pack, le modèle exact, le fournisseur, la date, les paramètres et les logs.

## Pondérations de catégories
Chaque catégorie représente 12,5 % du score final :
Code Generation, Debugging, Refactoring, Software Architecture, Testing, Code Review, API & Backend, DevOps & Tooling.
