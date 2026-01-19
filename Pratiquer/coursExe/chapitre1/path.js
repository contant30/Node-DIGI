// Créez un chemin complet vers un fichier appelé example.txt dans un dossier nommé assets
// Affichez le nom du répertoire du chemin complet
// Affichez le nom du fichier à partir du chemin complet
// Affichez l'extension du fichier

const path = require('path');

// Créer chemin complet vers assets/example.txt (relatif au script courant)
const assetsDir = path.join(__dirname, '..', 'Exercices', 'Exercices_Chapitre1', 'Ex2', 'assets');
const filePath = path.join(assetsDir, 'example.txt');

console.log('Chemin complet :', filePath);           // Affichez le nom du fichier à partir du chemin complet

console.log('Répertoire :', path.dirname(filePath)); // Affichez le nom du répertoire du chemin complet

console.log('Nom fichier :', path.basename(filePath)); // Affichez le nom du fichier

console.log('Extension :', path.extname(filePath));  // Affichez l'extension du fichier

console.log('Final:', filePath)
