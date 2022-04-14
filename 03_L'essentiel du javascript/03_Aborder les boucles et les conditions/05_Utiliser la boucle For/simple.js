var a = 18;

for(var i = 0; i < 10; i++) {
    if(i==5) {
        continue;
    }
    if(i==8) {
        break;
    }
    console.log(`La valeur de la variable i est ${i}.`);
}

console.log("Boucle terminée !");