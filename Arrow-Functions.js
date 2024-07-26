/*
O que são Arrow Functions?

Arrow Functions são FUNÇÕES que possuem uma SYNTAX MENOR, mais ENXUTA, devido ao fato de alguns comandos poderem ser OMITIDOS. Estas são SEMPRE FUNÇÕES ANÔNIMAS (funções sem um nome). Ex (rode este código (Node.js Exec)):
*/

// Escrito do modo:  function  :
function myFunction1(a, b) {
    return a * b;
} // "myFunction1" é o NOME da FUNÇÃO.
console.log(myFunction1(5, 3));

console.log("----------");

// Escrito do modo:  Arrow Function  :
//      PARÂMETROS  ↓         ↓  CÓDIGOS
let myFunction2 = (a, b) => a * b; // "myFunction2" é o NOME da VARIÁVEL que RECEBE a Arrow Function (que é anônima). *Apropósito, este ato de ATRIBUIR uma FUNÇÃO à uma VARIÁVEL chama-se:  Function Expression  .
console.log(myFunction2(5, 3));

/* PERCEBA QUE, na Arrow Function:
A KEYWORD  function  é OMITIDA;
O NOME da FUNÇÃO NÃO EXISTE (anônima);
As  CHAVES { }  e a KEYWORD  return  são OMITIDAS (estes só funcionam quando há apenas 1 statement 'retornável'). */

console.log("----------");

// Caso a Arrow Function tenha apenas 1 PARÂMETRO, os  PARÊNTESES ( )  TAMBÉM podem ser OMITIDOS. Ex:
//     PARÂMETRO  ↓
let myFunction3 = n => n + 2;
console.log(myFunction3(5));
