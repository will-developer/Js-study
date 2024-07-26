/*
O que faz o método  replace() ?

O método  replace()  faz uma BUSCA em uma STRING por um VALOR, ou uma EXPRESSÃO REGULAR, e RETORNA uma NOVA STRING com o valor SUBSTITUÍDO. Este método NÃO ALTERA a STRING ORIGINAL. Syntax:
string.replace(searchValue, newValue) 

Exemplo (rode este código (Node.js Exec)):
*/

let texto = "Caneta azul, azul caneta, caneta azul, tá marcada com minha letra.";
console.log(texto);
console.log("");

console.log("1)");
let resultado = texto.replace("azul", "vermelha"); // 1) Substitui APENAS a PRIMEIRA aparição de "azul" para "vermelha"
console.log("-- trocou ↓ ----- ↓ NÃO trocou ------ ↓ NÃO trocou");
console.log(resultado);

console.log("2)");
resultado = texto.replace(/azul/g, "vermelha"); // 2) Substitui TODAS as aparições de "azul" para "vermelha"
// "g" significa: "global modifier". Mas este "global" é APENAS DENTRO da STRING a ser MODIFICADA (texto)
console.log("-- trocou ↓ ------- ↓ trocou -------------- ↓ trocou");
console.log(resultado);

console.log("3)");
resultado = texto.replace("caneta", "lápis"); // 3) Este método é CASE-SENSETIVE, ou seja, ele DIFERENCIA letra MAIÚSCULA de MINÚSCULA
console.log("- ↓ NÃO trocou ---- ↓ trocou");
console.log(resultado);

console.log("4)");

resultado = texto.replace(/caneta/gi, "lápis"); // 4) Mas, escrito DESTA FORMA, é possível torná-lo CASE-INSENSETIVE
// "i" significa: "case-insensitive".
console.log("- ↓ trocou ------- ↓ trocou");
console.log(resultado);

console.log("5)");
resultado = texto.replace(/caneta|marcada|letra/gi, "xxxxx"); // 5) É possível substituir VÁRIOS TEXTOS de UMA VEZ SÓ
console.log("- ↓ trocou ------- ↓ trocou ------------ ↓ trocou ------ ↓ trocou");
console.log(resultado);
console.log("------------------------- ↑ trocou");
