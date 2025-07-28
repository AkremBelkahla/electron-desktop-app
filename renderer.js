const { ipcRenderer } = require('electron');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Initialisation de la base de données
const adapter = new FileSync('db.json');
const db = low(adapter);

// Éléments DOM
const messageInput = document.getElementById('message-input');
const saveButton = document.getElementById('save-button');
const messagesList = document.getElementById('messages-list');
const messageCount = document.getElementById('message-count');

// Charger les messages existants
function loadMessages() {
    const messages = db.get('messages').value();
    const count = db.get('count').value();
    
    // Mettre à jour le compteur
    messageCount.textContent = `Messages enregistrés: ${count}`;
    
    // Vider la liste
    messagesList.innerHTML = '';
    
    // Ajouter chaque message à la liste
    messages.forEach((message, index) => {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('message-item');
        messageElement.textContent = message;
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.onclick = () => deleteMessage(index);
        
        messageContainer.appendChild(messageElement);
        messageContainer.appendChild(deleteButton);
        messagesList.appendChild(messageContainer);
    });
}

// Supprimer un message
function deleteMessage(index) {
    // Supprimer le message de la base de données
    db.get('messages').splice(index, 1).write();
    
    // Mettre à jour le compteur
    const newCount = Math.max(0, db.get('count').value() - 1);
    db.set('count', newCount).write();
    
    // Recharger les messages
    loadMessages();
}

// Sauvegarder un nouveau message
function saveMessage() {
    const message = messageInput.value.trim();
    
    if (message) {
        // Ajouter le message à la base de données
        db.get('messages').push(message).write();
        
        // Incrémenter le compteur
        const newCount = db.get('count').value() + 1;
        db.set('count', newCount).write();
        
        // Vider l'input
        messageInput.value = '';
        
        // Recharger les messages
        loadMessages();
    }
}

// Événements
saveButton.addEventListener('click', saveMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveMessage();
    }
});

// Charger les messages au démarrage
loadMessages();
