# DevBench-40

Bench Pack tiers pour BenchLocal — benchmark multi-technologies destiné à évaluer l'assistance au développement logiciel.

## Couverture
40 scénarios fixes, 8 catégories × 5 scénarios :
- Code Generation
- Debugging
- Refactoring
- Software Architecture
- Testing
- Code Review
- API & Backend
- DevOps & Tooling

Les niveaux Junior, Intermédiaire et Senior sont mélangés. Les tâches restent agnostiques du langage : le modèle peut choisir TypeScript/JavaScript, Python, Java, C#/.NET, Go, Rust, PHP ou une autre stack pertinente, sauf contrainte explicitement indiquée dans le scénario.

## Installation dans BenchLocal
1. Décompresser l'archive ou la publier dans un dépôt GitHub public.
2. Pour une installation via URL, utiliser l'URL d'archive GitHub du dépôt (`https://github.com/<owner>/DevBench-40/archive/refs/heads/main.zip`) après publication.
3. Dans BenchLocal, ouvrir l'installation de Bench Pack tiers et fournir l'URL de l'archive.
4. Sélectionner le pack, les modèles et lancer le benchmark.

Le bundle contient déjà `benchlocal.pack.json` et `dist/benchlocal/index.js`.

## Développement
```bash
npm install
npm run build:benchlocal
npm run typecheck
```

## Limites de la version 1.0.0
Le benchmark envoie un prompt standardisé par scénario et utilise une grille de signaux explicites pour produire un score reproductible. La notation est heuristique : elle vérifie la présence d'éléments attendus dans la réponse, pas la compilation ni l'exécution du code. Un score élevé ne prouve donc pas que le code fonctionne. Les scénarios et la grille sont visibles dans `lib/scenarios.json` et `METHODOLOGY.md`.

Pour une évaluation plus stricte, la prochaine version pourra ajouter des dépôts de travail isolés et des tests d'exécution par langage (sandbox/verifier), ainsi qu'une évaluation humaine en aveugle.
