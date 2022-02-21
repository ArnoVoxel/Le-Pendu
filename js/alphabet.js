var ascii = 65;

for (let i = 0; i < 26; i++) {
    var lettre = String.fromCharCode(ascii);
    var newLettre = document.createElement('div');
    newLettre.setAttribute('id', 'lettre' + ascii);
    newLettre.setAttribute('class', 'boutonLettre');
    newLettre.textContent = lettre;
    document.getElementById('lettresAlphabet').appendChild(newLettre);
    ascii++;
}