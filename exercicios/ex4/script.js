calcular = () => {
    let n_multiplo = document.querySelector("#numero");
    let escreva = document.querySelector("#output");

    if (n_multiplo.value.length == 0) {
        escreva.value = "Digite um número acima para funcionar";
        return;
    } else {
        n = Number(n_multiplo.value);
        let resultado = "";
        let multiplicacao = 0;
        for (let i = 0; i <= 10; i++) {
            multiplicacao = n * i;
            resultado += `${n} x ${i} = ${multiplicacao} \n`;
        }
        escreva.value = resultado;
    }
};
