/*
O que fazem os métodos  Math.floor()  e  Math.random() ?

O método  Math.floor()  ARREDONDA um número, inserido como parâmetro, para MENOS (floor/chão).
O método  Math.random()  retorna um número entre 0 (incluído) e 1 (não-incluído).

Exemplo (rode este código (Node.js Exec)):
*/

const numbers = []

for (let c = 0; c < 5; c++) {
    numbers[c] = Math.random() // numbers  recebe 5 números aleatórios entre 0 e 1.
    console.log(numbers[c])    // exibe-se cada um dos números na tela.
}

console.log('')

for (let c = 0; c < 5; c++) {
    numbers[c] = numbers[c] * 10 // Para explicar o Math.floor, multipliquei cada número do array por 10.
    console.log(numbers[c])      // exibe-se cada um dos números na tela.
}  

console.log('')

for (let c in numbers) {
    console.log(Math.floor(numbers[c])) // O método Math.floor() ARREDONDA para MENOS cada número do array, transformando-os em números inteiros, e exibe-se cada um dos números na tela.
} 

console.log('----------EXTRA:----------')

// Esta função gera um NÚMERO ALEATÓRIO entre um RANGE MÍNIMO e MÁXIMO (é meio complicadinho de entender, mas acho que consegui explicar xD).

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} //                                   ¹↑    ²↑          ³↑   
console.log(getRndInteger(15, 20))

/* A função foi chamada passando os argumentos 15(min) e 20(max). 

Para chegar no resultado esta função gera, na verdade, um número aleatório ENTRE a DIFERENÇA do MÍNIMO e o MÁXIMO. É o que faz as setinhas ¹ e ², subtraindo max(20) por min(15). Ou seja, a distância entre 15 e 20 é: 5. Depois soma-se +1 para que o número 20 também esteja incluído na probabilidade de ser gerado pois, caso contrário, seria gerado um número entre 15 e 19.

Então, neste exemplo: Math.random() * (max - min + 1) gerará um número aleatório entre 0 (incluso) e 6 (não-incluso). Ou seja, entre 0 e 5.

Com o número gerado, o método Math.floor() ARREDONDARÁ este número para MENOS. 

E depois este número será somado com o range mínimo(15), setinha ³, exibindo na tela um número aleatório entre 15 e 20 (ambos inclusos).

Descrevendo passo a passo:

/* min=15; max=20.
Math.random gera 0.38
max(20) - min(15) + 1 = 6
6 * 0.38 = 2.28
Math.floor arredondará para 2
Este 2 será somado com min(15)
resultado: 17 */