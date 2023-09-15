/*
 código usando JS e node.js. 
 */

const prompt = require("prompt-sync")();

function print(variavel) {
  console.log(fibonacci(variavel));
}

function fibonacci(numero) {
  if (isNaN(numero)) {
    return "esse caracter não é válido.";
  } else if (numero < 0) {
    return "esse caracter não é válido.";
  }

  if (numero == 0) {
    return 0;
  } else if (numero == 1) {
    return numero;
  } else if (numero == 2) {
    return numero - 1;
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
}

/*O input foi feito com o nodeJS */

console.log(" ");
const numero = prompt("digite o índice do número que deseja saber: ");
console.log(" ");
print(numero);
console.log(" ");
