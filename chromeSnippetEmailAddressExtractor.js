// Sélectionnez tous les éléments du DOM contenant du texte
var elements = document.querySelectorAll("*");

// Expression régulière pour correspondre aux adresses e-mail
var regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

// Utilisez un Set pour stocker les adresses e-mail uniques
var uniqueEmailAddresses = new Set();

// Parcourez les éléments du DOM
elements.forEach(function(element) {
    // Vérifiez si le texte de l'élément correspond à l'expression régulière
    var matches = element.textContent.match(regex);
    if (matches) {
        // Ajoutez les adresses e-mail correspondantes au Set
        matches.forEach(function(match) {
            uniqueEmailAddresses.add(match);
        });
    }
});

console.log('------START EXTRACTING EMAIL ADDRESSES-------');

// Maintenant, uniqueEmailAddresses contient les adresses e-mail sans doublons
console.log([...uniqueEmailAddresses]);

console.log('------END EXTRACTING EMAIL ADDRESSES-------');
