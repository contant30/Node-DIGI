// Utilisez dns.lookup pour obtenir l'adresse IP du NDD diginamic.fr
// Récupérez les enregistrements MX du même domaine (permet de spécifier les serveurs de messagerie pour un domaine).
// Affichez le résultat dans la console 


const dns = require("dns");


// obtention de l'adresse IP du NDD diginamic.fr avec dns.lookup
dns.lookup("diginamic.fr",(err,address) => {
    if(err){
        console.log(err);
    }else{
        console.log(address);
    }
});

// obtention des enregistrements MX du même domaine avec dns.resolveMx
dns.resolveMx("diginamic.fr",(err,address) => {
    if(err){
        console.log(err);
    }else{
        console.log(address);
    }

});