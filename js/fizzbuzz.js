
document.addEventListener('load', fizzBuzz());   

/**
 * Fonction fizz buzz (si le nombre est modulo de 3 j'affiche Fizz sinon Buzz)
 */
function fizzBuzz() {
    const divFizzBuzz = document.getElementById("fizz-buzz");
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            divFizzBuzz.innerHTML += i+ " :FIZZ <br>";
            console.log("Fizz");
        } else {
            divFizzBuzz.innerHTML += i+ " :BUZZ<br>";
            console.log(i);
        }
    }
}

