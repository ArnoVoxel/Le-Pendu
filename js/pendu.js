//déclaration variables
var motSecret = document.getElementById('motMystere');
var tMotSecret = [];
var tMotCache = [];
var score = 0;

//valeur aléatoire dans le tableau dico
var indiceMotDico = parseInt(Math.random() * 1600 + 1);



//mettre le mot dans un tableau
tMotSecret = dictionnaire[indiceMotDico].split('');
for (let i in tMotSecret) {
    if (i == 0) {
        tMotCache[0] = tMotSecret[0];
    } else if (i == tMotSecret.length - 1) {
        tMotCache[tMotSecret.length - 1] = tMotSecret[tMotSecret.length - 1];
    } else {
        tMotCache[i] = "-";
    }
}

afficherMotSecret();

//enregistrer le mot secret et le mot cache en Session Storage
sessionStorage.setItem('motSecret', indiceMotDico);

//afficher mot à trouver
function afficherMotSecret() {
    for (let i in tMotCache) {
        var lettreCache = tMotCache[i];
        var newLettreCache = document.createElement('div');
        newLettreCache.setAttribute('class', 'lettreCache');
        newLettreCache.textContent = lettreCache;
        document.getElementById('motMystere').appendChild(newLettreCache);
    }
}

//test de la lettre cliquée vs cases de tMotSecret
//fonctions