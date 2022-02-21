//déclaration de variables
var ascii = 65;

//création des boutons avec lettres
for (let i = 0; i < 26; i++) {
    //création d'une div contenant les lettres de l'alphabet en incrémentant
    var lettre = String.fromCharCode(ascii);
    var newLettre = document.createElement('div');
    newLettre.setAttribute('id', 'lettre' + ascii);
    newLettre.setAttribute('class', 'boutonLettre');
    newLettre.textContent = lettre;
    document.getElementById('lettresAlphabet').appendChild(newLettre);
    document.getElementById('lettre' + ascii).addEventListener('click', lettreCliquee);
    ascii++;
}

//créer une fonction qui envoie la valeur de la lettre cliquée
function lettreCliquee() {
    sessionStorage.setItem('lettreJouee' + score, this.innerHTML);
    score++;

    //affichage évolutif
    switch (score) {
        case 1:
            document.body.style.backgroundColor = "rgb(255, 200, 0)";
            break;
        case 2:
            document.body.style.backgroundColor = "rgb(255, 175, 0)";
            break;
        case 3:
            document.body.style.backgroundColor = "rgb(255, 120, 0)";
            break;
        case 4:
            document.body.style.backgroundColor = "rgb(255, 100, 0)";
            break;
        case 5:
            document.body.style.backgroundColor = "rgb(255, 50, 0)";
            break;
        case 6:
            document.body.style.backgroundColor = "rgb(255, 0, 0)";
            sessionStorage.clear();
            alert('PERDU!');
            break;
    }
}