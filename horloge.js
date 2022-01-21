
/**
 * function qui permet de rafraichir toutes les secondes
 */
 function refresh(){
    var time = 1000; 
    setTimeout('showDate()',time)
}

let horloge = document.getElementById('horloge');
/**
 * Fonction qui permet de générer l'horloge 
 */
function showDate() {

    //instanciation de l'horloge 
    var date = new Date()
    //recupération heure, minute, seconde 
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();

    if( heure < 10 ){ heure = '0' + heure; }
    if( minute < 10 ){ minute = '0' + minute; }
    if( seconde < 10 ){ seconde = '0' + seconde; }

    //concatenation de heure - minute - seconde affecté dans time
    var time = heure + ':' + minute + ':' + seconde;
    //ajout 
    horloge.innerHTML = time;
    refresh();
    console.log('ici')
 }

showDate();