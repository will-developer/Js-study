/*
O que é Spread Operator(...) ?

O Operador Spread (...) permite-nos COPIAR ELEMENTOS de um PRIMEIRO ARRAY para um SEGUNDO ARRAY ou COPIAR PROPRIEDADES e MÉTODOS de um PRIMEIRO OBJETO para um SEGUNDO OBJETO. Exemplo (rode este código (Node.js Exec)):
*/

// O Spread Operator ESPALHA os VALORES de um ARRAY ou OBJETO. Ex:
const array_1 = [2, 3, 4]
const array_2 = [1, ...array_1, 5, 6]
console.log(array_2)

console.log(`Espalhou-se os VALORES  ${array_1}  dentro do  array_2`)

console.log('--------------------')

// É possível também PASSAR ARGUMENTOS para uma FUNÇÃO utilizando o Spread Operator:
let somar = (a, b, c) => {return a + b + c} // a = 2; b = 3; c = 4.
console.log(`Resultado: ${somar(...array_1)}`)

console.log('--------------------')

// O Spread Operator permite-nos também fazer uma CÓPIA RASA (Shallow Copy) de um OBJETO ou ARRAY. Cópia Rasa significa: COPIAR APENAS as PROPRIEDADES que estão na CAMADA MAIS SUPERFICIAL do OBJETO ou ARRAY. Ou seja, não incluí-se OUTROS OBJETOS nem ARRAYS, pois estes possuem OUTRA CAMADA de ANINHAMENTO. Ex:

const bill =  {
    idade: 11,                // {CAMADA MAIS SUPERFICIAL}
    brinquedos: {             // {OUTRO OBJETO COM
        favorito: 'Bola',     // PROPRIEDADES
        menosUsado: 'Girafa'  // ANINHADAS}
    }
}

const apollo = {...bill}
// const apollo = {...bill, brinquedos: {...bill.brinquedos}} // * ignore isto por enquanto.

bill.idade = 14 

console.log(`Idade de Bill: ${bill.idade}`)
console.log(`Idade de Apollo: ${apollo.idade}`)

/* linha 26:  apollo  RECEBE uma CÓPIA do OBJETO  bill 
linha 29: alterou-se o VALOR da PROPRIEDADE  bill.idade  para  14
linha 31 e 32: exibe-se a idade de cada um. Os valores são DIFERENTES. Tudo certo, é o que queríamos. Isto significa que a PROPRIEDADE  idade  de  bill  e  apollo  são PROPRIEDADES DIFERENTES, ou seja, cada uma tem o seu PRÓPRIO ESPAÇO alocado na MEMÓRIA. Veja a comparação lógica: */ 

console.log(`Sâo iguais? ${bill.idade === apollo.idade}`) // VALOR e TIPO iguais? 

console.log('--------------------')

// Agora vamos testar o OBJETO  brinquedos  , que têm PROPRIEDADES ANINHADAS:

bill.brinquedos.favorito = 'Tubarão'

console.log(`Brinquedo favorito de Bill: ${bill.brinquedos.favorito}`)
console.log(`Brinquedo favorito de Apollo: ${apollo.brinquedos.favorito}`)

/* linha 44: alterou-se o VALOR da PROPRIEDADE  bill.brinquedos.favorito  para  'Tubarão'
linha 46 e 47: exibe-se o nome do brinquedo favorito de cada um. Os valores são IGUAIS. Não é o que queríamos que acontecesse. Isto ocorreu porque o Spread Operator COPIOU apenas a CAMADA de ANINHAMENTO mais SUPERFICIAL do OBJETO (onde está a propriedade  idade  ). As PROPRIEDADES do OBJETO  brinquedos  NÃO FORAM INCLUSAS, significando que a PROPRIEDADE  brinquedos.favorito  de  bill  e  apollo  são PROPRIEDADES IGUAIS e COMPARTILHAM ESTE MESMO PONTO na MEMÓRIA. Veja a comparação lógica: */

console.log(`Sâo iguais? ${bill.brinquedos.favorito === apollo.brinquedos.favorito}`) // VALOR e TIPO iguais?

/* É necessário que se faça uma COPIA MANUAL do OBJETO  brinquedos  para fazer esta SEPARAÇÃO. 
***RETIRE O COMENTÁRIO DA LINHA 27 E TORNE UM COMENTÁRIO A LINHA 26. Feito isto:
linha 27:  apollo  RECEBE uma CÓPIA do OBJETO  bill  E também uma CÓPIA do OBJETO  brinquedos  . Problema resolvido. Agora a comparação lógica retorna FALSE e apenas o VALOR do brinquedo favorito de  bill  foi alterado e, o de  apollo  , continua "Bola". */

console.log('--------------------')

// O Spread Operator PERMITE que se faça ALTERAÇÕES no NOVO OBJETO DENTRO da PRÓPRIA ESTRUTURA. Ex:
const sputnik = { // COPIOU-SE o OBJETO  apollo  como 'default' e SOBRESCREVEU-SE o VALOR da PROPRIEDADE  idade  .
    ...apollo,
    idade: 17,
    brinquedos: {...apollo.brinquedos, // ↑ Mesma lógica.
        favorito: 'Cadela Laika'}
}

console.log(sputnik)

console.log('--------------------OUTROS CASOS--------------------')

// Perceba que, nos exemplos dados acima, por se tratar de OBJETOS, colocou-se o Spread Operator dentro de CHAVES. Da mesma forma, quando se tratar de ARRAYS, coloca-se o Spread Operator dentro de COLCHETES. Exemplos:

// Combinando os ELEMENTOS de 2 ARRAYS distintos dentro de um único ARRAY:
const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]
const numerosCombinados = [...numeros1, ...numeros2]
console.log(numerosCombinados)

console.log('--------------------')

// COPIANDO PARTES do ARRAY  numerosCombinados  , ao transformar SEUS ELEMENTOS em VARIÁVEIS dentro de um NOVO ARRAY:
const [um, dois, ...resto] = numerosCombinados
console.log(um)
console.log(dois)
console.log(resto)