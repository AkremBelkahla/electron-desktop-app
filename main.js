const { app, BrowserWindow } = require('electron');
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Initialisation de la base de données
const adapter = new FileSync('db.json');
const db = low(adapter);

// Définir les valeurs par défaut pour la base de données
db.defaults({ messages: [], count: 0 }).write();

// Variable pour stocker la fenêtre principale
let mainWindow;

function createWindow() {
  // Créer la fenêtre du navigateur
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Charger le fichier HTML
  mainWindow.loadFile('index.html');

  // Ouvrir les outils de développement (à commenter pour la production)
  // mainWindow.webContents.openDevTools();

  // Événement quand la fenêtre est fermée
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Créer la fenêtre quand Electron est prêt
app.whenReady().then(createWindow);

// Quitter quand toutes les fenêtres sont fermées (sauf sur macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
