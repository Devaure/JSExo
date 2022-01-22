
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
 * Fonction permettant de créer la carte de la liste
 */
function createCardList(){
    let container = document.getElementById("container");
    var card = document.createElement("div");
    card.className += "cardone";
    card.innerHTML += "<h2>"+ listDesNoms.name + "</h2>";
    card.innerHTML += "<p class='description'>" + listDesNoms.description + "</p>";
    card.innerHTML += "<a class='button' href="+listDesNoms.lien+">Liste</a>";
    container.appendChild(card);
}

/**
 * Fonction permettant de créer la carte de l'hiorloge 
 */
 function createHorloge(){
    let container = document.getElementById("container");
    var card = document.createElement("div");
    card.className += "cardtwo";
    card.innerHTML += "<h2>"+ horloge.name + "</h2>";
    card.innerHTML += "<p class='descriptiontwo'>" + horloge.description + "</p>";
    card.innerHTML += "<a class='buttontwo' href="+horloge.lien+">Horloge</a>";
    container.appendChild(card);
}

/**
 * Fonction permettant de créer la carte de l'hiorloge 
 */
 function createCardFizzBuzz(){
    let container = document.getElementById("container");
    var card = document.createElement("div");
    card.className += "cardthree";
    card.innerHTML += "<h2>"+ fizzBuzz.name + "</h2>";
    card.innerHTML += "<p class='descriptionthree'>" + fizzBuzz.description + "</p>";
    card.innerHTML += "<a class='buttonthree' href="+fizzBuzz.lien+">Fizz Buzz</a>";
    container.appendChild(card);
}

/**
 * Fonction permettant de créer la carte de l'hiorloge 
 */
 function createCardFizzBuzzFinal(){
    let container = document.getElementById("container");
    var card = document.createElement("div");
    card.className += "cardfor";
    card.innerHTML += "<h2>"+ fizzBuzzFinal.name + "</h2>";
    card.innerHTML += "<p class='descriptionfor'>" + fizzBuzzFinal.description + "</p>";
    card.innerHTML += "<a class='buttonfor' href="+fizzBuzzFinal.lien+">Fizz Buzz Final</a>";
    container.appendChild(card);
}


createCardFizzBuzzFinal();
createCardFizzBuzz();
createCardList();
createHorloge();