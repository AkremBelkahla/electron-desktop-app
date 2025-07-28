# Electron Desktop Application

![Electron Logo](https://www.electronjs.org/assets/img/logo.svg)

A modern desktop application built with Electron, providing a seamless cross-platform experience.

## Features

- **Cross-platform** - Runs on Windows, macOS, and Linux
- **Modern UI** - Clean and intuitive user interface
- **Efficient** - Lightweight and performant
- **Easy to Use** - Simple and straightforward navigation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later) or Yarn
- Git

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
