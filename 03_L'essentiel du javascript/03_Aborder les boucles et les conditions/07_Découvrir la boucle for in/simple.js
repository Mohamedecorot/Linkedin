var colors = ["Rouge", "Vert", "Bleu"];
var person = {
    firstName: "Damien",
    lastName: "Bruydonckx",
    age: 43,
    sexe: "M"
};

for(color in colors) {
    console.log(`Ma couleur préférée est le ${colors[color]}.`);
}

for(prop in person) {
    console.log(`La valeur de la clé ${prop} est ${person[prop]}.`);
}