/* Quando devo usar o  ;  (ponto e vírgula)?

Se há 2 ou mais DECLARAÇÕES(STATEMENTS) em uma MESMA LINHA, é OBRIGATÓRIO utilizar o;  para separá - las uma das outras.Exemplo(rode este código(Node.js Exec)): */

const numbers = [1, 2, 3, 4, 5]; // este  ;  é OPCIONAL
for (let i = 0; i < numbers.length; i++) {
    // estes  ;  são OBRIGATÓRIOS para separar as declarações
    console.log(numbers[i]); // este  ;  é OPCIONAL
}

// Não há mais NENHUM outro uso obrigatório do  ;  no JavaScript.
