// Nous allons créer une URL en manipulant les attributs de l'objet URL
// 1. Créez l'url 'https://www.example.com'
// 2. Ajoutez path '/unepage'
// 3. ajouter un argument de recherhe '?query=marecherche'
// 4. Ajoutez le hash '#section2'

const url = new URL('https://www.example.com');

url.pathname = '/unepage';

url.search = 'query=marecherche';

url.hash = 'section2';

console.log(url.toString());