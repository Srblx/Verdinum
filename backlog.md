# Backlog du projet "FinMastery"

## USER STORIES

---

### Story 1 : Design plus sombre et mode base consommation

**En tant que** utilisateur web,  
**je veux** que l’écran de prise de rendez-vous soit sobre et propose un mode base consommation (DarkMode)  
**afin de** réduir l'éblouissement, diminuer de la lumière bleue, amélioerer le contraste
et réduire la fatigue occulaire.

- 🎯 Objectif : Mode basse consommation
- 🧱 BP associée : RGESN - UX & sobriété numérique
- 🛠️ KPI : LCP sur web (Lighthouse)
- 📅 Tag roadmap : M1

---

### Story 2 : Réduction poids images

**En tant que** utilisateur récurrent,  
**je veux** que les visuels de la page prise de rendez-vous soient plus légers  
**afin de** économiser de la data sur mon forfait.

- 🎯 Objectif : 90% des images converties en WebP
- 🧱 BP associée : Compression d’images / formats modernes
- 🛠️ KPI : Poids total dossier `/assets` < 2.5 Mo
- 📅 Tag roadmap : M3

---

### Story 3 : Optimisation Back-End & Infra

**En tant que** administrateur systeme
**je veux** que les données des rendez-vous passés soient automatiquement purgées après une période définie.
**afin de** maintenir une base de données légère, optimiser les performances
et respecter les principes du RGPD.

- 🎯 Objectif : Aléger la base de données et améliorer les temps de réponses
- 🧱 BP associée : Éconception Web 5.0.0 017 Choisir un format de données adapté pour la base de données
- 🛠️ KPI : Réduire de 30% le temps de réponse moyen des requêtes API
- 📅 Tag roadmap : M3

---

### Story 4 : Chargement initial plus rapide

**En tant que** nouvel utilisateur web,  
**je veux** que l’écran de prise de rendez-vous charge en moins de 1,5 s  
**afin de** ne pas décrocher lors d’un pic de réseau lent.

- 🎯 Objectif : temps de chargement < 1500 ms
- 🧱 BP associée : Éconception Web 5.0.0 0037 - Utiliser le chargement paresseux & Favoriser un design simple
- 🛠️ KPI : LCP sur web (Lighthouse)
- 📅 Tag roadmap : M4

---

### Story 5 : Hébergement Mutualisé

**En tant que** responsable Technique (CTO)
**je veux** héberger l'application sur une plateforme mutualisée (PaaS).
**afin de** réduire nos coûts d'exploitation et avoir une meilleure utilisation des ressources serveur.

- 🎯 Objectif : Diminuer l'empreinte financière et environnementale de l'infrastructure
- 🧱 BP associée : RGESN - Gestion infrastructure
- 🛠️ KPI : Réduction de 40% du coût mensuel d'hébergement
- 📅 Tag roadmap : M4

---