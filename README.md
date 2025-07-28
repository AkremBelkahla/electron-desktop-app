# Application Desktop Simple

Une application desktop simple créée avec Electron.js et une base de données locale (lowdb).

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante dans le répertoire du projet :

```bash
npm install
```

## Démarrage de l'application

Pour démarrer l'application en mode développement, exécutez :

```bash
npm start
```

## Création d'un exécutable Windows (.exe)

Pour créer un exécutable Windows, exécutez :

```bash
npm run build
```

L'exécutable sera généré dans le dossier `dist`.

## Structure du projet

- `main.js` - Point d'entrée de l'application Electron
- `index.html` - Interface utilisateur
- `renderer.js` - Script pour l'interface utilisateur
- `preload.js` - Script préchargé pour la communication entre les processus
- `styles.css` - Styles CSS pour l'interface
- `db.json` - Fichier de base de données (créé automatiquement)
