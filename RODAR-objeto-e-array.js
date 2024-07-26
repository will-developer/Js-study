/* Nos ARRAYS, os ELEMENTOS (conjunção de: posição e valor) são ACESSADOS por seus ÍNDICES (0, 1, 2).

Nos OBJECTS, as PROPRIEDADES (conjunção de: nome e valor) são ACESSADAS por suas KEYS (nome1, nome2, nome3). */

const pessoas = { nome1: "rodolfo", nome2: "rogerin" };
const idades = [20, 35];

// Há 2 maneiras de acessar as PROPRIEDADES de um OBJETO.

// 1) syntax: objectName.propertyName
console.log(`O ${pessoas.nome1} tem 20 anos de idade e o ${pessoas.nome2} têm 35.`);

// 2) syntax: objectName["propertyName"]
console.log(`O ${pessoas["nome1"]} tem 20 anos de idade e o ${pessoas["nome2"]} têm 35.`);

// acessando os ELEMENTOS de um ARRAY através de seus ÍNDICES:
console.log(`O rodolfo tem ${idades[0]} anos de idade e o rogerin têm ${idades[1]}.`);

/* pessoas  é um OBJETO;  
nome1 e nome2  são as PROPRIEDADES do OBJETO  pessoas;
"rodolfo" e "rogerin"  são os VALORES das PROPRIEDADES  nome1 e nome2  , respectivamente. */
