/*
Operador de Coalescência Nula(Nullish Coalescing Operator) - retorna a expressão da DIREITA caso a expressão da ESQUERDA seja  undefined  ou  null.Caso a expressão da ESQUERDA seja DEFINIDA, ESTA será retornada. 
Syntax: leftExpr ?? rightExpr

É MUITO semelhante ao Operador Lógico OR. A diferença é:
O Operador OR retorna o 1° valor VERDADEIRO. 
o Operador de Coalescência Nula retorna o 1° valor DEFINIDO.

  Exemplo (rode este código (Node.js Exec)):
*/

let gols = 0

QTDgols = gols || '"ERRO: nenhum gol cadastrado"'  // 1)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

console.log('')

QTDgols = gols ?? '"ERRO: nenhum gol cadastrado"'  // 2)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

// 1) Neste caso, utilizando o OR, o número  0  foi tratado como FALSO e, portanto, a expressão da DIREITA foi retornada: Marrocos venceu a Espanha por 4 x "ERRO: nenhum gol cadastrado" 
// Porém,  0  , é um número de gols TOTALMENTE VÁLIDO e POSSÍVEL de se acontecer e queremos que este seja exibido. Para fazer isto pode-se usar o Operador de Coalescência Nula, substituindo o  ||  por  ??  .

// 2) Desta forma, utilizando Operador de Coalescência Nula, ao invés de retornar-se o 1° valor VERDADEIRO, retorna-se o 1° valor DEFINIDO. Então o novo valor retornado será: Marrocos venceu a Espanha por 4 x 0

/* Todas expressões que o operador OR trata como FALSO:
null;
NaN;
0;
empty value (" " or ' ' or ` `);
undefined. */