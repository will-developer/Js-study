/* for...in:
O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre todas as chaves do objeto, permitindo acessar os valores associados a essas chaves. */

/* for...of:
O loop for...of é usado para iterar sobre elementos iteráveis, como arrays, strings, mapas, conjuntos, entre outros. Ele percorre diretamente os valores dos elementos, em vez de acessar as chaves como no for...in.
*/

/* Iterar é o ato de repetidamente executar um conjunto de instruções ou ações em uma sequência de itens, como elementos em uma lista, valores em um array ou caracteres em uma string. A ideia é percorrer cada elemento da sequência para realizar alguma operação ou obter informações sobre eles. */ 

let num = [10, 20, 30, 40, 50];

console.log("----------------a1-----------------"); // 10, 20, 30, 40, 50 ou seja os elementos do array
for (i of num) {
    console.log(i);
}

console.log("----------------a2-----------------"); // 5 linhas do array com o mesmo valor pois no array tem 5 length
for (i of num) {
    console.log(num);
}

console.log("----------------a3-----------------"); //undefined pois o "i" retorna o array e o "num" retorna o array com a quantidade de length com o mesmo valor, não sei se faz muito sentido usar o "num" no "for of"
for (i of num) {
    console.log(i[num]);
}

console.log("----------------a4-----------------"); //undefined
for (i of num) {
    console.log(num[i]);
}

console.log("=================================================================================");
console.log("=================================================================================");
console.log("=================================================================================");

console.log("----------------b1-----------------"); // retorna o "i" como um indice
for (i in num) {
    console.log(i);
}

console.log("----------------b2-----------------"); // mesma coisa que o a2
for (i in num) {
    console.log(num);
}

console.log("----------------b3-----------------"); //mesma coisa que o a3
for (i in num) {
    console.log(i[num]);
}

console.log("----------------b4-----------------"); // mesma coisa que o a1
for (i in num) {
    console.log(num[i]);
}
