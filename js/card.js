var myList = [
    /**
 * Creation de l'objet listDesNoms
 */
{
    name:"Liste des noms",
    description:"Permet d'afficher de façon dynamique quelques noms de personnages",
    lien:"./html/exercice1.html",
    classNameCard: "cardone",
    nameButton:"Liste Noms",
    classNameDescription:"descriptiontwo",
    classNameButton:"button"
},

/**
 * Creation de l'objet horloge
 */
{
    name: "Horloge",
    description: "Permet d'afficher une horloge numérique qui affiche l'heure actuelle",
    lien:"./html/exercice2.html",
    classNameCard: "cardtwo",
    nameButton:"Horloge",
    classNameDescription:"description",
    classNameButton:"buttontwo"
},

/**
 * Creation de l'objet fizzBuzz
 */
{
    name: "Fizz Buzz",
    description: "Permet d'afficher Fizz si c'est modulo de 3 sinon si c'est modulo de 5 Buzz sinon si c'est modulo de 15 FizzBuzz",
    lien:"./html/exercice3.html",
    classNameCard: "cardthree",
    nameButton:"Fizz Buzz",
    classNameDescription:"descriptionthree",
    classNameButton:"buttonthree"
},

/**
 * Creation de l'objet fizzBuzz
 */
{
    name: "FizzBuzzFinal",
    description: "Lorsque je clique sur next ou prev, j'affiche Fizz si c'est modulo de 3 sinon si c'est modulo de 5 Buzz sinon si c'est modulo de 15 FizzBuzz",
    lien:"./html/exercice4.html",
    classNameCard: "cardfor",
    nameButton:"Fizz Buzz Final",
    classNameDescription:"descriptionfor",
    classNameButton:"buttonfor"
}
]


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

myList.forEach(element => {
    createCard(element.name,element.description,element.lien,element.classNameCard,element.nameButton,element.classNameDescription, element.classNameButton);

});
