document.addEventListener('load', function(){
/**
 * Fonction fizz buzz (si le nombre est modulo de 3 j'affiche Fizz sinon Buzz)
 */
function fizzBuzz(){
   var divFizzBuzz = document.getElementById("fizz-buzz");
    for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        var divFizzBuzz = document.getElementById("fizz-buzz");
         divFizzBuzz.innerHTML += "FIZZ";
      console.log("Fizz");
    } else {
        var divFizzBuzz = document.getElementById("fizz-buzz");
         divFizzBuzz.innerHTML += "BUZZ";
      console.log(i);
    }
  }
}


});
