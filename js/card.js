

let listDesNoms = {
    name:"Liste des noms",
    description:"Permet d'afficher de façon dynamique quelques noms de personnages",
    lien:"./html/exercice1.html"
}

let horloge = {
    name: "Horloge",
    description: "Permet d'afficher une horloge numérique qui affiche l'heure actuelle",
    lien:"./html/exercice2.html"
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

createCardList();
createHorloge();