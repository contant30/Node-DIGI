// Ecrivez la fonction displayOsMessage() qui détecte le systeme d'exploitation
// Cette fonction affichera un message différend pour Windows, macOS et Linux
// Appelez la fonction pour la tester
// Il faudra trouver quel est la chaîne de retour pour chacun des systèmes

const os = require("os");

function displayOsMessage(){

    const platform = os.platform();

    if(platform === "win32"){
        console.log("Windows",os.cpus());

    }else if(platform === "darwin"){
        console.log("macOS");

    }else if(platform === "linux"){
        console.log("Linux");
    }
}

displayOsMessage();