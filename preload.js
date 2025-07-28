// Fichier preload.js
// Ce fichier est exécuté avant le chargement du renderer
// et a accès à la fois aux APIs Node.js et aux APIs du navigateur

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
