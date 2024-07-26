/*
O que é Rest Operator (...) ?

O Operador Rest(...) permite a criação de um PARÂMETRO CAPAZ de RECEBER um NÚMERO INDEFINIDO de ARGUMENTOS, guardando - os dentro de um ARRAY.Exemplos(rode este código(Node.js Exec))
 */

// O parâmetro  ...otherInfo  é um Rest Parameter que pode guardar uma quantidade INFINITA de ARGUMENTOS.

function myBio(firstName, lastName, ...otherInfos) { 
    return otherInfos;
}

console.log(myBio("Elon", "Musk", "Male", "Tesla", "SpaceX", "blablabla"))

console.log('----------')

// Esta função utiliza o Rest Parameter  ...nums  para RECEBER uma QUANTIDADE INDEFINIDA de NÚMEROS. E, devido ao fato destes serem guardados dentro de um ARRAY, é possível fazer um LOOP através dos VALORES deste array, guardando-os dentro da variável  total  , que irá RECEBER a SOMA entre o TOTAL e CADA NÚMERO do ARRAY, ACUMULANDO os VALORES dentro de si.

function sum(...nums) {
    let total = 0

    for (let x of nums) {
        total += x
    }
    return total
}
console.log(sum(11, 22, 33, 44, 55, 66, 77, 88, 99))