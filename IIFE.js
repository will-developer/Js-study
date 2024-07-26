/* O que é IIFE?

IIFE, Immediately Invoked Function Expression, também conhecido como Self-Executing Anonymous Function, é uma função que, assim que DEFINIDA, é IMEDIATAMENTE EXECUTADA. Uma característica de funções IIFE é ter um Escopo Lexical (Lexical Scope). Ex (rode este código (Node.js Exec)): */

// Exemplo 1 (imprimindo "Olá Mundo"):
    (function () {console.log("Olá Mundo")})()
/* ¹↑       ²↑                            ¹↑ ↑³
¹ - A função é ENCAPSULADA entre PARÊNTESES, o que promove um Escopo Lexical (explicado mais para frente).
² - A função é ANÔNIMA, ou seja, NÃO TEM um NOME.
³ - A função CHAMA ELA PRÓPRIA. */

// Exemplo 1.1 (Versão Arrow Function):
;(() => {console.log("Olá Mundo")})()

console.log('----------')

// Exemplo 2 (somando 3 números):
    ;(function (a, b, c) {console.log(`Resultado: ${a + b + c}`)})(2, 5, 3)
/* ¹↑             ²↑                                                 ³↑
¹ - É uma boa prática, SEMPRE que CRIAR uma FUNÇÃO IIFE, colocar um  ;  no início. Caso RETIRE o  ;  , o código dará este ERRO:
TypeError: console.log(...) is not a function (referindo-se ao  Exemplo 1.1  )
Devido ao fato da função IIFE começar ABRINDO parênteses, o JavaScript interpretará que você está PASSANDO ARGUMENTOS para o  Exemplo 1.1  (por isso: "is not a function"). Ou seja, ele tratará o  Exemplo 2  como uma CONTINUAÇÃO do  Exemplo 1.1  , dado que NÃO HÁ NADA SEPARANDO-OS. É como se os 2 códigos estivessem um ao lado do outro. O  ;  serve para SEPARAR um STATEMENT do OUTRO, resolvendo este problema.
² - Criação dos PARÂMETROS.
³ - Passagem dos ARGUMENTOS. */

console.log('----------')

/* O que é Escopo Lexical (Lexical Scope)?
Escopo Lexical, ou Escopo Léxico, é um escopo "mais ou menos" local. Ex: */

const externo = () => {
    const livro = 'Sapiens' // 1)
    console.log(livro.toUpperCase()) // 3)
    const interno = () => {
        const livro = 'Bíblia' // 2)
        console.log(livro.toUpperCase()) // 1.1)
    }
    interno()
}
externo()

/* Ja é sabido que variáveis declaradas DENTRO de uma FUNÇÃO têm ESCOPO LOCAL. Entretanto, no ESCOPO LÉXICAL:
1)   Uma VARIÁVEL (livro) declarada DENTRO de uma FUNÇÃO (externo)
1.1) PODE ser ACESSADA por uma FUNÇÃO ANINHADA (interno)
(press f8): "SAPIENS" é exibido no console.

2) RETIRE ESTE COMENTÁRIO. Observe: esta DECLARAÇÃO será PRIORIZADA, pois a função  interno()  irá, PRIMEIRAMENTE, buscar a variável  livro  DENTRO de SEU BLOCO DE CÓDIGOS.
(press f8): "BÍBLIA" é exibido no console.

3) RETIRE ESTE COMENTÁRIO E O COMENTÁRIO  2)  . Observe: devido ao ESCOPO LOCAL das FUNÇÕES, ambas serão tratadas como variáveis DIFERENTES e serão exibidas INDIVIDUALMENTE, mesmo tendo o MESMO NOME. 
(press f8): "SAPIENS" e "BÍBLIA" são exibidos no console. */ 

console.log('----------')
console.log('----------')

/* Por isso Escopo Lexical é "mais ou menos" local, tudo depende das circunstâncias. Se a FUNÇÃO ANINHADA BUSCAR a VARIÁVEL dentro do SEU BLOCO DE CÓDIGOS e ENCONTRA-LA, ela atuará com escopo LOCAL. SENÃO ENCONTRAR, ela atuará com escopo LEXICAL, BUSCANDO-A no ESCOPO ACIMA. Caso não encontre também neste escopo, BUSCARÁ-SE no ESCOPO ACIMA DESTE, e assim em diante. Ex: */

const Externo = () => {
    const Livro = 'Sapiens' // 3)

    const Interno = () => {
        const Livro = 'Bíblia' // 2)

    const maisInterno = () => {
        console.log(Livro.toUpperCase()) // 1)
    }
    maisInterno()
    }
    Interno()
}
Externo()

/* 
1) A função  maisInterno()  NÃO TEM a variável  Livro  dentro de seu bloco de códigos.  
2) Portanto ela atuará com escopo LEXICAL, buscando-a dentro da função  Interno()  , acima dela. Exibe-se "BÍBLIA".
3) Caso você torne o  2)  um comentário, ela buscará a variável dentro de  Externo()  . Exibe-se "SAPIENS". */