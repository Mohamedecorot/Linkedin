//créer l'élement a
let elemA = document.createElement('a');
//changer l'attribut href de l'élément a
elemA.href = 'produit.html';
//créer un textNode
let linkLabel = document.createTextNode('produits');
//ajouter le texte à l'élement a
elemA.appendChild(linkLabel);
//créer un élement li
let liElem = document.createElement('li');
//ajouter l'élement a à l'élement li
liElem.appendChild(elemA);
//recherche l'élement ul et y ajouter l'élément li créé plus tôt
document.querySelector('#mainNav ul').appendChild(liElem);