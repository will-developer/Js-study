/* 
O método  split()  permite você DESMEMBRAR/DIVIDIR uma STRING, transformando-a em um ARRAY de SUBSTRINGS. Este método retorna um NOVO ARRAY. Este método NÃO ALTERA a STRING ORIGINAL. Syntax:
string.split(separator, limit) 
 
Exemplo (rode este código (Node.js Exec)):
*/

let text = "Você está estudando JavaScript."

const intoArray1 = text.split(" ")
console.log(intoArray1) //     ↑ Use este separador para DIVIDIR a STRING em PALAVRAS.

const intoArray2 = text.split("")
console.log(intoArray2) //     ↑ Use este separador para DIVIDIR a STRING em CARACTERES.

const intoArray3 = text.split("", 9)
console.log(intoArray3) //        ↑ Use este parâmetro para LIMITAR a QUANTIDADE de DIVISÕES.