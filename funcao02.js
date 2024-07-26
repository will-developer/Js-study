// function soma(n1, n2) {
//     return n1 + n2;
// }

// console.log(soma(2, 5));

// caso a chamada não passar todos os parametros da função, é possivel fazer os parametros da função serem igual a 0 para não dar erro

function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log(soma(2));
