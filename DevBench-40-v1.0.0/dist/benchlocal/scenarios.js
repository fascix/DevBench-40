module.exports = [
  {
    "id": "CG-01",
    "title": "CRUD REST API",
    "category": "Code Generation",
    "level": "junior",
    "prompt": "Concevoir une API REST de gestion de tâches avec création, lecture, mise à jour et suppression. Fournir des exemples TypeScript/Node ou Python/FastAPI, validation des entrées, codes HTTP et séparation routes/services.",
    "signals": [
      "validation",
      "test",
      "error",
      "type",
      "function"
    ]
  },
  {
    "id": "CG-02",
    "title": "Validation de formulaire",
    "category": "Code Generation",
    "level": "junior",
    "prompt": "Implémenter la validation d'un formulaire d'inscription (email, mot de passe, confirmation, âge). Montrer validation côté client et serveur, messages d'erreur accessibles et cas limites.",
    "signals": [
      "validation",
      "test",
      "error",
      "type",
      "function"
    ]
  },
  {
    "id": "CG-03",
    "title": "Traitement CSV en flux",
    "category": "Code Generation",
    "level": "intermediate",
    "prompt": "Écrire un traitement de gros CSV sans charger tout le fichier en mémoire. Détecter les lignes invalides, gérer l'encodage, produire un rapport et expliquer la complexité.",
    "signals": [
      "validation",
      "test",
      "error",
      "type",
      "function"
    ]
  },
  {
    "id": "CG-04",
    "title": "Client HTTP résilient",
    "category": "Code Generation",
    "level": "intermediate",
    "prompt": "Créer un client HTTP réutilisable avec timeout, retry exponentiel avec jitter, respect de Retry-After, annulation et distinction erreurs réseau/HTTP. Éviter les retries dangereux sur opérations non idempotentes.",
    "signals": [
      "validation",
      "test",
      "error",
      "type",
      "function"
    ]
  },
  {
    "id": "CG-05",
    "title": "Moteur de règles extensible",
    "category": "Code Generation",
    "level": "senior",
    "prompt": "Concevoir un moteur de règles métier extensible avec priorités, composition, validation et traçabilité. Proposer interfaces, implémentation illustrative, tests et stratégie d'évolution.",
    "signals": [
      "validation",
      "test",
      "error",
      "type",
      "function"
    ]
  },
  {
    "id": "DB-01",
    "title": "Null pointer en production",
    "category": "Debugging",
    "level": "junior",
    "prompt": "Un endpoint plante lorsque le profil utilisateur n'a pas d'adresse secondaire. Diagnostiquer la cause probable, proposer un correctif minimal et des tests de non-régression. Distinguer valeur absente, null et chaîne vide.",
    "signals": [
      "cause",
      "reproduction",
      "test",
      "fix",
      "race"
    ]
  },
  {
    "id": "DB-02",
    "title": "Race condition sur stock",
    "category": "Debugging",
    "level": "intermediate",
    "prompt": "Deux commandes simultanées peuvent acheter le dernier article disponible et créer un stock négatif. Expliquer la course et proposer une correction transactionnelle adaptée SQL, avec stratégie de test concurrent.",
    "signals": [
      "cause",
      "reproduction",
      "test",
      "fix",
      "race"
    ]
  },
  {
    "id": "DB-03",
    "title": "Fuite mémoire dans worker",
    "category": "Debugging",
    "level": "intermediate",
    "prompt": "Un worker Node/Python voit sa mémoire augmenter après chaque job. Examiner les causes possibles (listeners, caches, buffers, références globales), proposer un plan de diagnostic instrumenté et un correctif.",
    "signals": [
      "cause",
      "reproduction",
      "test",
      "fix",
      "race"
    ]
  },
  {
    "id": "DB-04",
    "title": "Deadlock transactionnel",
    "category": "Debugging",
    "level": "senior",
    "prompt": "Deux transactions mettent à jour les mêmes comptes dans un ordre différent et provoquent des deadlocks. Diagnostiquer et proposer plusieurs stratégies de prévention/récupération, avec compromis.",
    "signals": [
      "cause",
      "reproduction",
      "test",
      "fix",
      "race"
    ]
  },
  {
    "id": "DB-05",
    "title": "Régression de performance N+1",
    "category": "Debugging",
    "level": "senior",
    "prompt": "Une page de commandes déclenche une requête SQL par ligne après une évolution ORM. Identifier le pattern N+1, corriger sans casser pagination/permissions et définir une mesure avant/après.",
    "signals": [
      "cause",
      "reproduction",
      "test",
      "fix",
      "race"
    ]
  },
  {
    "id": "RF-01",
    "title": "Fonction monolithique",
    "category": "Refactoring",
    "level": "junior",
    "prompt": "Refactoriser une fonction de 100 lignes qui valide une commande, calcule le prix, débite le paiement et envoie un email. Décrire les responsabilités, extraire des fonctions et préserver le comportement.",
    "signals": [
      "responsabil",
      "test",
      "interface",
      "compatib",
      "separation"
    ]
  },
  {
    "id": "RF-02",
    "title": "Remplacer les booléens magiques",
    "category": "Refactoring",
    "level": "junior",
    "prompt": "Une fonction process(data, true, false, true) est difficile à utiliser. Proposer une API explicite, rétrocompatibilité éventuelle et tests.",
    "signals": [
      "responsabil",
      "test",
      "interface",
      "compatib",
      "separation"
    ]
  },
  {
    "id": "RF-03",
    "title": "Réduire le couplage",
    "category": "Refactoring",
    "level": "intermediate",
    "prompt": "Un service métier instancie directement le SDK d'un fournisseur de paiement. Refactoriser vers une abstraction injectable, expliquer le seam de test et la gestion des erreurs.",
    "signals": [
      "responsabil",
      "test",
      "interface",
      "compatib",
      "separation"
    ]
  },
  {
    "id": "RF-04",
    "title": "Migration vers async",
    "category": "Refactoring",
    "level": "intermediate",
    "prompt": "Un module synchrone appelle plusieurs services externes et bloque les workers. Décrire une migration asynchrone progressive, propagation des erreurs, timeouts et compatibilité.",
    "signals": [
      "responsabil",
      "test",
      "interface",
      "compatib",
      "separation"
    ]
  },
  {
    "id": "RF-05",
    "title": "Découpage d'un domaine",
    "category": "Refactoring",
    "level": "senior",
    "prompt": "Un monolithe contient facturation, abonnements et notifications dans un même module. Proposer une refonte modulaire sans microservices prématurés, règles de dépendance et migration incrémentale.",
    "signals": [
      "responsabil",
      "test",
      "interface",
      "compatib",
      "separation"
    ]
  },
  {
    "id": "AR-01",
    "title": "Architecture d'un SaaS",
    "category": "Software Architecture",
    "level": "junior",
    "prompt": "Proposer l'architecture d'un petit SaaS multi-tenant (authentification, projets, utilisateurs, facturation). Décrire composants, flux, stockage et isolation des tenants.",
    "signals": [
      "trade-off",
      "flux",
      "sécurité",
      "observabilité",
      "migration"
    ]
  },
  {
    "id": "AR-02",
    "title": "Monolithe modulaire ou microservices",
    "category": "Software Architecture",
    "level": "intermediate",
    "prompt": "Une équipe de 6 développeurs prévoit de séparer une application en 12 microservices. Évaluer l'opportunité et proposer une architecture cible proportionnée, critères de découpage et étapes.",
    "signals": [
      "trade-off",
      "flux",
      "sécurité",
      "observabilité",
      "migration"
    ]
  },
  {
    "id": "AR-03",
    "title": "Événements et cohérence",
    "category": "Software Architecture",
    "level": "intermediate",
    "prompt": "Après validation d'une commande, plusieurs systèmes doivent être notifiés. Concevoir une approche événementielle fiable avec outbox, idempotence, retries et observabilité.",
    "signals": [
      "trade-off",
      "flux",
      "sécurité",
      "observabilité",
      "migration"
    ]
  },
  {
    "id": "AR-04",
    "title": "Multi-tenant sécurisé",
    "category": "Software Architecture",
    "level": "senior",
    "prompt": "Concevoir l'isolation des données de plusieurs organisations dans une application B2B. Comparer row-level tenancy, schéma dédié et base dédiée; couvrir sécurité, migration et coût.",
    "signals": [
      "trade-off",
      "flux",
      "sécurité",
      "observabilité",
      "migration"
    ]
  },
  {
    "id": "AR-05",
    "title": "Résilience d'une plateforme",
    "category": "Software Architecture",
    "level": "senior",
    "prompt": "Concevoir une plateforme critique dépendant de trois services tiers. Définir SLO, timeouts, bulkheads, circuit breakers, dégradation contrôlée, reprise et observabilité.",
    "signals": [
      "trade-off",
      "flux",
      "sécurité",
      "observabilité",
      "migration"
    ]
  },
  {
    "id": "TS-01",
    "title": "Tests unitaires métier",
    "category": "Testing",
    "level": "junior",
    "prompt": "Écrire une stratégie de tests unitaires pour une fonction de calcul de remise avec seuils, plafonds, coupons et arrondis. Fournir des cas nominaux, limites et invalides.",
    "signals": [
      "assert",
      "cas",
      "mock",
      "isolation",
      "coverage"
    ]
  },
  {
    "id": "TS-02",
    "title": "Tests d'intégration API",
    "category": "Testing",
    "level": "junior",
    "prompt": "Définir des tests d'intégration pour POST /orders avec base SQL de test. Couvrir validation, authentification, persistance, erreurs et isolation des tests.",
    "signals": [
      "assert",
      "cas",
      "mock",
      "isolation",
      "coverage"
    ]
  },
  {
    "id": "TS-03",
    "title": "Tests basés propriétés",
    "category": "Testing",
    "level": "intermediate",
    "prompt": "Pour un parseur/serialiseur JSON de configuration, proposer des tests property-based et fuzzing. Définir invariants, génération de données et réduction des contre-exemples.",
    "signals": [
      "assert",
      "cas",
      "mock",
      "isolation",
      "coverage"
    ]
  },
  {
    "id": "TS-04",
    "title": "Tests de concurrence",
    "category": "Testing",
    "level": "senior",
    "prompt": "Valider qu'un système de réservation ne peut jamais attribuer deux fois le même créneau. Concevoir des tests concurrents reproductibles et assertions d'invariants.",
    "signals": [
      "assert",
      "cas",
      "mock",
      "isolation",
      "coverage"
    ]
  },
  {
    "id": "TS-05",
    "title": "Pyramide de tests CI",
    "category": "Testing",
    "level": "senior",
    "prompt": "Une suite E2E est lente et instable. Auditer la stratégie de tests et proposer une pyramide équilibrée, tests de contrat, données déterministes et seuils CI.",
    "signals": [
      "assert",
      "cas",
      "mock",
      "isolation",
      "coverage"
    ]
  },
  {
    "id": "CR-01",
    "title": "Review d'une fonction d'auth",
    "category": "Code Review",
    "level": "junior",
    "prompt": "Revoir une implémentation qui compare les mots de passe en clair, renvoie des erreurs détaillées et journalise le token. Identifier risques, sévérité et corrections.",
    "signals": [
      "risque",
      "severity",
      "correction",
      "sécurité",
      "impact"
    ]
  },
  {
    "id": "CR-02",
    "title": "Review d'une migration SQL",
    "category": "Code Review",
    "level": "intermediate",
    "prompt": "Une migration ajoute une colonne NOT NULL avec valeur par défaut sur une table de plusieurs millions de lignes. Revoir risques de verrouillage, déploiement progressif, rollback et compatibilité.",
    "signals": [
      "risque",
      "severity",
      "correction",
      "sécurité",
      "impact"
    ]
  },
  {
    "id": "CR-03",
    "title": "Review d'un cache",
    "category": "Code Review",
    "level": "intermediate",
    "prompt": "Un cache Redis stocke les profils utilisateurs par userId sans tenir compte du tenant ni des permissions. Analyser fuite inter-tenant, invalidation, TTL et clés.",
    "signals": [
      "risque",
      "severity",
      "correction",
      "sécurité",
      "impact"
    ]
  },
  {
    "id": "CR-04",
    "title": "Review d'une API publique",
    "category": "Code Review",
    "level": "senior",
    "prompt": "Revoir une API publique qui accepte un sortBy fourni par le client, construit du SQL par concaténation et expose les exceptions. Identifier injection, contrat, observabilité et compatibilité.",
    "signals": [
      "risque",
      "severity",
      "correction",
      "sécurité",
      "impact"
    ]
  },
  {
    "id": "CR-05",
    "title": "Review d'un traitement asynchrone",
    "category": "Code Review",
    "level": "senior",
    "prompt": "Un consumer acquitte un message avant d'avoir persisté le résultat et n'a aucune clé d'idempotence. Analyser perte/doublon, ordre, retry, DLQ et correction.",
    "signals": [
      "risque",
      "severity",
      "correction",
      "sécurité",
      "impact"
    ]
  },
  {
    "id": "BE-01",
    "title": "API paginée et filtrée",
    "category": "API & Backend",
    "level": "junior",
    "prompt": "Concevoir GET /products avec pagination, tri et filtres validés. Définir contrat JSON, limites, tri stable, erreurs et prévention des injections.",
    "signals": [
      "validation",
      "auth",
      "status",
      "transaction",
      "pagination"
    ]
  },
  {
    "id": "BE-02",
    "title": "Authentification et autorisation",
    "category": "API & Backend",
    "level": "intermediate",
    "prompt": "Concevoir l'authentification d'une API web et l'autorisation par rôle et ressource. Comparer session/cookie et JWT, CSRF, rotation, expiration et contrôle d'accès.",
    "signals": [
      "validation",
      "auth",
      "status",
      "transaction",
      "pagination"
    ]
  },
  {
    "id": "BE-03",
    "title": "Webhook fiable",
    "category": "API & Backend",
    "level": "intermediate",
    "prompt": "Implémenter la réception d'un webhook signé. Couvrir vérification HMAC, fenêtre anti-rejeu, idempotence, accusé rapide, traitement asynchrone et secrets.",
    "signals": [
      "validation",
      "auth",
      "status",
      "transaction",
      "pagination"
    ]
  },
  {
    "id": "BE-04",
    "title": "Modèle de données e-commerce",
    "category": "API & Backend",
    "level": "senior",
    "prompt": "Modéliser commandes, lignes, paiements, remboursements et historique de statut en SQL. Définir contraintes, transactions, index et invariants métier.",
    "signals": [
      "validation",
      "auth",
      "status",
      "transaction",
      "pagination"
    ]
  },
  {
    "id": "BE-05",
    "title": "Recherche à grande échelle",
    "category": "API & Backend",
    "level": "senior",
    "prompt": "Concevoir une recherche produit supportant texte, filtres, facettes et mises à jour fréquentes. Comparer SQL full-text et moteur dédié, cohérence, pagination et coûts.",
    "signals": [
      "validation",
      "auth",
      "status",
      "transaction",
      "pagination"
    ]
  },
  {
    "id": "DO-01",
    "title": "Dockeriser une application",
    "category": "DevOps & Tooling",
    "level": "junior",
    "prompt": "Écrire un Dockerfile multi-stage pour une application web, utilisateur non-root, dépendances reproductibles, healthcheck et image finale minimale.",
    "signals": [
      "health",
      "pipeline",
      "secret",
      "rollback",
      "monitor"
    ]
  },
  {
    "id": "DO-02",
    "title": "Pipeline CI de qualité",
    "category": "DevOps & Tooling",
    "level": "junior",
    "prompt": "Concevoir un pipeline CI qui installe, lint, typecheck, teste et construit une application multi-langage. Gérer cache, versions et échec rapide.",
    "signals": [
      "health",
      "pipeline",
      "secret",
      "rollback",
      "monitor"
    ]
  },
  {
    "id": "DO-03",
    "title": "Déploiement sans interruption",
    "category": "DevOps & Tooling",
    "level": "intermediate",
    "prompt": "Décrire un déploiement progressif d'une API avec migrations de base de données, readiness/liveness, rollback et compatibilité N-1.",
    "signals": [
      "health",
      "pipeline",
      "secret",
      "rollback",
      "monitor"
    ]
  },
  {
    "id": "DO-04",
    "title": "Observabilité production",
    "category": "DevOps & Tooling",
    "level": "intermediate",
    "prompt": "Définir logs structurés, métriques, traces et alertes pour diagnostiquer une hausse de latence API. Éviter données sensibles et alertes bruyantes.",
    "signals": [
      "health",
      "pipeline",
      "secret",
      "rollback",
      "monitor"
    ]
  },
  {
    "id": "DO-05",
    "title": "Gestion des secrets et supply chain",
    "category": "DevOps & Tooling",
    "level": "senior",
    "prompt": "Sécuriser une chaîne de build/deploy: secrets, dépendances, SBOM, provenance, permissions minimales, images signées et réponse à une dépendance compromise.",
    "signals": [
      "health",
      "pipeline",
      "secret",
      "rollback",
      "monitor"
    ]
  }
];
