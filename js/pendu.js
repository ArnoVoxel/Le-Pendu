//déclaration variables
var motSecret = document.getElementById('motMystere');
var tMotSecret = [];
var tMotCache = [];
var score = 0;
var btnExplications = document.getElementById('explications');
var btnNewGame = document.getElementById('newGame');

//valeur aléatoire dans le tableau dico
var indiceMotDico = parseInt(Math.random() * 1600 + 1);

//abonnements
btnNewGame.addEventListener('click', startNewGame);
btnExplications.addEventListener('click', afficherRegles);

startNewGame();

//enregistrer le mot secret et le mot cache en Session Storage
sessionStorage.setItem('motSecret', indiceMotDico);

//afficher mot à trouver

function motAleatoire (){
    tMotSecret = dictionnaire[indiceMotDico].split('');
    tMotCache = [];
    for (let i in tMotSecret) {
        if (i == 0) {
            tMotCache[0] = tMotSecret[0];
        } else if (i == tMotSecret.length - 1) {
            tMotCache[tMotSecret.length - 1] = tMotSecret[tMotSecret.length - 1];
        } else {
            tMotCache[i] = "-";
        }
    }
}

function afficherMotSecret() {
    // for (let i in tMotCache) {
    //     var lettreCache = tMotCache[i];
    //     // var newLettreCache = document.createElement('div');
    //     // newLettreCache.setAttribute('class', 'lettreCache');
    //     // newLettreCache.textContent = lettreCache;
    //     // document.getElementById('motMystere').appendChild(newLettreCache);
    //     document.getElementById('motMystere').textContent += lettreCache;
    // }
    document.getElementById('motMystere').innerHTML = "nouveau mot";
    document.getElementById('motMystere').innerHTML = tMotCache.join('');
}

function startNewGame(){

    
    sessionStorage.clear();
    document.body.style.backgroundColor = "rgb(255, 255, 0)";
    score = 0;
    partieActive = true;
    indiceMotDico = parseInt(Math.random() * 1600 + 1);
    motAleatoire();
    afficherMotSecret();
    sessionStorage.setItem('motSecret', indiceMotDico);
}

function afficherRegles(){
    if (document.getElementById('texteExplications').style.display == 'block'){
        document.getElementById('texteExplications').style.display = 'none';
    } else {
        document.getElementById('texteExplications').style.display = 'block';
    }
    
}