/*
 código usando JS e node.js. 
 */
const prompt = require("prompt-sync")();

function fibonacci(numero) {
  n = 2;
  valor1 = 0;
  valor2 = 1;
  valor3 = 1;

  if (isNaN(numero)) {
    return console.log("esse caracter não é válido.");
  } else if (numero < 0) {
    return console.log("esse caracter não é válido.");
  }

  while (n < numero) {
    valorN = valor2 + valor3;
    valor2 = valor3;
    valor3 = valorN;

    n++;
  }
  if (numero == 0) {
    console.log(`o número correspondente na sequência fibonacci é ${valor1}`);
  } else if (numero == 1 || numero == 2) {
    console.log(`o número correspondente na sequência fibonacci é ${valor2}`);
  } else {
    console.log(`o número correspondente na sequência fibonacci é ${valorN}`);
  }
}

/*O input foi feito com o nodeJS */

console.log(" ");
const numero = prompt("digite o índice do número que deseja saber: ");
console.log(" ");
fibonacci(numero);
console.log(" ");
