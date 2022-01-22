
/**
 * Creation de l'objet listDesNoms
 */
let listDesNoms = {
    name:"Liste des noms",
    description:"Permet d'afficher de façon dynamique quelques noms de personnages",
    lien:"./html/exercice1.html"
}

/**
 * Creation de l'objet horloge
 */
let horloge = {
    name: "Horloge",
    description: "Permet d'afficher une horloge numérique qui affiche l'heure actuelle",
    lien:"./html/exercice2.html"
}

/**
 * Creation de l'objet fizzBuzz
 */
let fizzBuzz = {
    name: "Fizz Buzz",
    description: "Permet d'afficher Fizz si c'est modulo de 3 sinon si c'est modulo de 5 Buzz sinon si c'est modulo de 15 FizzBuzz",
    lien:"./html/exercice3.html"
}

/**
 * Creation de l'objet fizzBuzz
 */
 let fizzBuzzFinal = {
    name: "FizzBuzzFinal",
    description: "Lorsque je clique sur next ou prev, j'affiche Fizz si c'est modulo de 3 sinon si c'est modulo de 5 Buzz sinon si c'est modulo de 15 FizzBuzz",
    lien:"./html/exercice4.html"
}

/**
 * Fonction permettant de créer les cartes
 * @param {*} name 
 * @param {*} description 
 * @param {*} lien 
 * @param {string} classNameCard 
 * @param {string} nameButton 
 * @param {string} classNameDescription 
 * @param {string} classNameButton 
 */
 function createCard(name,description, lien, classNameCard, nameButton, classNameDescription, classNameButton){
    let container = document.getElementById("container");
    var card = document.createElement("div");
    card.className += classNameCard;
    card.innerHTML += "<h2>"+ name + "</h2>";
    card.innerHTML += "<p class="+classNameDescription+">" + description+ "</p>";
    card.innerHTML += "<a class="+classNameButton+" href="+lien+">"+nameButton+"</a>";
    container.appendChild(card);
}
createCard(horloge.name,horloge.description,horloge.lien,"cardtwo", "Horloge","descriptiontwo", "buttontwo");
createCard(listDesNoms.name,listDesNoms.description,listDesNoms.lien,"cardone","Liste Noms","description", "button");
createCard(fizzBuzz.name,fizzBuzz.description,fizzBuzz.lien,"cardthree", "Fizz Buzz","descriptionthree", "buttonthree");
createCard(fizzBuzzFinal.name,fizzBuzzFinal.description,fizzBuzzFinal.lien,"cardfor", "Fizz Buzz Final", "descriptionfor", "buttonfor");
