contar = () => {
    let inicio = Number(document.querySelector("#inicio").value);
    let fim = Number(document.querySelector("#fim").value);
    let passo = Number(document.querySelector("#passo").value);
    let res = document.querySelector("#output");

    if (isNaN(passo) || passo < 0) {
        res.innerHTML = "O valor de passo precisa ser um número positivo.";
        return;
    } else if (passo === 0) {
        passo = 1;
    }

    if (isNaN(inicio)) {
        res.innerHTML = "O valor de início precisa ser um número.";
        return;
    }

    if (isNaN(fim)) {
        res.innerHTML = "O valor de fim precisa ser um número.";
        return;
    }

    let resultado = "Contagem: <br>";

    if (fim > inicio) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado += `${i} \u{1F449} `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += `${i} \u{1F449}`;
        }
    }

    resultado += `\u{1F3C1}`;

    res.innerHTML = resultado;
};
