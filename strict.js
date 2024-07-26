// SEM UTILIZAR o Strict Mode:
function serHumano() {
    return (nome = "rodolfo"); // atribuindo um valor à uma variável SEM DECLARÁ-LA.
}
console.log(serHumano()); // "rodolfo" foi exibido normalmente sem mensagens de erro.

console.log("-------");

// UTILIZANDO o Strict Mode:
function pessoa() {
    "use strict"; // caso APAGUE este "use strict", o código NÃO DARÁ ERRO, mesmo que este exista.
    return (sobrenome = "da Silva"); // atribuindo um valor à uma variável SEM DECLARÁ-LA.
}
console.log(pessoa()); // ReferenceError: sobrenome is not defined

// Para saber mais, Google: "JavaScript Use Strict"
