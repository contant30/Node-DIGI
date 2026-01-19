/*const http = require("http");

const server = http.createServer((req, res) => {

    switch (req.url) {

        case '/': res.end('Bienvenue sur la page d accueil!'); break;

        case '/about': res.end('Ceci est la page à propos'); break;

        case '/contact': res.end('Contactez-nous à contact@example.com.'); break;

        default: res.writeHead(404); res.end('404');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});*/


// Lisez le contenu du fichier example.txt situé dans le dossier assets et affichez-le dans la console.
// Créez un nouveau fichier appelé output.txt dans le même dossier et écrivez-y une chaîne de caractères : Ceci est un nouveau fichier créé avec Node.js
// Supprimez le fichier output.txt que vous venez de créer.


const { error } = require('console');
const fs = require('fs');


try {

    fs.readFileSync("./assets/example.txt", "utf8");
    console.log(FileRead);

    fs.writeFileSync("./assets/output.txt","contenue mise a jour", "utf8");

} catch (error) {

    console.log(error);
};  
