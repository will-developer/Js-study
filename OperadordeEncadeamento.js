function execucaoOperacao(operador, numeros) {
  let res = numeros[0]; // Começa com o primeiro número como resultado inicial

  for (let i = 1; i < numeros.length; i++) {
      if (operador === "+") {
          res += numeros[i]; // Soma
      } else if (operador === "-") {
          res -= numeros[i]; // Subtração
      } else if (operador === "*") {
          res *= numeros[i]; // Multiplicação
      } else if (operador === "/") {
          res /= numeros[i]; // Divisão
      }
  }

  return res;
}

let numeros = [2, 2, 2];

let soma = execucaoOperacao("+", numeros);
console.log("Soma:", soma);

let subtracao = execucaoOperacao("-", numeros);
console.log("Subtração:", subtracao);

let multiplicacao = execucaoOperacao("*", numeros);
console.log("Multiplicação:", multiplicacao);

let divisao = execucaoOperacao("/", numeros);
console.log("Divisão:", divisao);
