// Sélectionnez tous les éléments du DOM contenant du texte
var elements = document.querySelectorAll("*");

// Expression régulière pour correspondre aux numéros de téléphone au format +216
var regex = /\+216\s\d{2}\s\d{3}\s\d{3}/g;

// Utilisez un Set pour stocker les numéros de téléphone uniques
var uniquePhoneNumbers = new Set();

// Parcourez les éléments du DOM
elements.forEach(function(element) {
    // Vérifiez si le texte de l'élément correspond à l'expression régulière
    var matches = element.textContent.match(regex);
    if (matches) {
        // Ajoutez les numéros de téléphone correspondants au Set
        matches.forEach(function(match) {
            uniquePhoneNumbers.add(match);
        });
    }
});

console.log('------START EXTRACTING-------');

// Maintenant, uniquePhoneNumbers contient les numéros de téléphone sans doublons
console.log([...uniquePhoneNumbers]);

console.log('------END EXTRACTING-------');
