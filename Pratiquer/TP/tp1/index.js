// Imports des modules
const http = require('http'); // creer le serveur web
const os = require("os"); // module os pour recuperer les informations du systeme
const dns = require('dns'); // module dns pour la resolution des noms de domaine
const url = require('url'); // module url pour parser les urls
// creation du serveur
const server = http.createServer((req, res) => {

    

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Bienvenue sur la page d\'accueil!');

    }  else if (req.url === '/status') {
        res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8' });
    // Code execute toutes les 2 secondes    
    const interval = setInterval(() => {

      const stats = {
        cpu: os.cpus().length, // cpu
        memory: (os.freemem() / 1e6).toFixed(0) + 'MB', // memoire
        uptime: (os.uptime() / 3600).toFixed(1) + 'h' // temps de fonctionnement
      };
 
      // Affichage au format JSON
      res.write(`data: ${JSON.stringify(stats)}\n\n`);
    }, 2000);
    
    }else if (req.url.startsWith('/resolve')) { 
        
        // parser de l'url avec dummy
        const urlComplet= new URL('http://dummy' + req.url);
        // recuperation du domaine
        const domain = urlComplet.searchParams.get('domain');
        
        // si le domaine n'est pas fourni retour une erreur 
        if (!domain) {
            res.writeHead(400);
            res.end('nom de domain requis !');

        // sinon resout le domaine
        } else {
            // resolution du domaine
            dns.lookup(domain, (err, addressIp) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });

            if (err) {
                res.end(JSON.stringify({ error: err.message }));

            } else {
                res.end(JSON.stringify({
                    domain,
                    addressIp
                }));
            }
        });
            }

    } else {
        res.writeHead(404);
        res.end('Page non trouvée.');
    }
    
});


//demarrage du serveur 
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
