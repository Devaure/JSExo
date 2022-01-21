
var countElement = document.querySelector(".countvalue");
var buttonNext = document.querySelector(".next");
var buttonPrev = document.querySelector(".prev");
const divFizzBuzzFinal = document.querySelector(".type");
/**
 * Fonction fizz buzz (si le nombre est modulo de 3 j'affiche Fizz sinon Buzz)
 */
function fizzBuzz(i) {

    if (i % 15 === 0) {
        divFizzBuzzFinal.innerHTML = " :FIZZBUZZ<br>";
    } else if (i % 3 === 0) {
        divFizzBuzzFinal.innerHTML = " :FIZZ <br>";
        console.log("Fizz");
    } else if (i % 5 === 0) {
        divFizzBuzzFinal.innerHTML = " :BUZZ<br>";
        console.log(i);
    } else {
        divFizzBuzzFinal.innerHTML = "/:)"
    }

}

/**
 * Fonction qui permet d'incrémenter de 1 sur le countElement
 */
function increment() {
    let newNumber = parseInt(countElement.innerHTML) + 1
    countElement.innerHTML = newNumber;
    fizzBuzz(newNumber);
}

/**
 * Fonction qui permet de déincrémenter de 1 sur le countElement
 */
function desIncrement() {
    let newNumber = parseInt(countElement.innerHTML) - 1;
    countElement.innerHTML = newNumber;
    fizzBuzz(newNumber);
}

/**
 * Fonction qui permet d'incrémenter de 1 au clique sur le boutton Next
 */
buttonNext.addEventListener('click', function () {
    increment();
})

/**
 * Fonction qui permet d'incrémenter de 1 au clique sur le boutton Prev
 */
buttonPrev.addEventListener('click', function () {
    desIncrement();
})