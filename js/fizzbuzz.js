
document.addEventListener('load', fizzBuzz());   

/**
 * Fonction fizz buzz (si le nombre est modulo de 3 j'affiche Fizz sinon Buzz)
 */
function fizzBuzz() {
    const divFizzBuzz = document.getElementById("fizz-buzz");
    for (var i = 1; i <= 100; i++) {

        if(i % 15 === 0){
            divFizzBuzz.innerHTML += i+ " :FIZZBUZZ ";
           
        }else if (i % 3 === 0) {
            divFizzBuzz.innerHTML += i+ " :FIZZ ";
          
        } else if(i % 5 === 0){
            divFizzBuzz.innerHTML += i+ " :BUZZ ";
        }else{
            divFizzBuzz.innerHTML += i+ " :))";
        }
    }
}

