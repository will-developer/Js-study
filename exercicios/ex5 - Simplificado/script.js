let resultadoContainer = document.createElement("div");
resultadoContainer.classList.add("resultado-container");
document.querySelector("section").appendChild(resultadoContainer);
let numeros = [];

adicionar = () => {
    let addNumero = document.querySelector("#numero");
    let output = document.querySelector("#output");

    if (addNumero.value.length === 0 || isNaN(addNumero.value) || addNumero.value > 100) {
        alert("Você precisa digitar um número válido (entre 1 e 100).");
    } else {
        let numero = Number(addNumero.value);

        if (numeros.includes(numero)) {
            alert("Você já digitou esse número, escolha outro.");
        } else {
            numeros.push(numero); // Adiciona o número ao array
            let valorAtual = output.value;
            output.value = `${valorAtual}Valor ${numero} adicionado \n`;
            addNumero.value = "";
        }
    }
};

resultado = () => {
    let soma = 0;

    if (numeros.length === 0) {
        alert("Você ainda não adicionou nenhum número");
    } else {
        let maiorNumero = Math.max(...numeros);
        let menorNumero = Math.min(...numeros);

        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        let media = soma / numeros.length;

        // Limpa o contêiner de resultados removendo todos os elementos filhos
        while (resultadoContainer.firstChild) {
            resultadoContainer.removeChild(resultadoContainer.firstChild);
        }

        // Função para criar um elemento div com texto e classe
        const criarDivResultado = (texto, classe) => {
            let div = document.createElement("div");
            div.textContent = texto;
            div.classList.add(classe);
            resultadoContainer.appendChild(div);
        };

        criarDivResultado(`Quantidade de números cadastrados: ${numeros.length}`, "resultado-div");
        criarDivResultado(`Maior número cadastrado: ${maiorNumero}`, "resultado-div");
        criarDivResultado(`Menor número cadastrado: ${menorNumero}`, "resultado-div");
        criarDivResultado(`Soma de todos os valores: ${soma}`, "resultado-div");
        criarDivResultado(`Média de todos os valores: ${media}`, "resultado-div");
    }
};
