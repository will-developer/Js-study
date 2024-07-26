(() => {
    let defineIdade = () => {
        let ano = parseInt(document.querySelector("#ano").value);
        let anoAtual = new Date().getFullYear();
        let res = anoAtual - ano;
        if (res < 0) {
            alert("Número inválido, você nem nasceu ainda");
        } else if (res > 100) {
            alert("Ou você morreu ou é muito velho");
        } else {
            return res;
        }
    };

    let defineGenero = () => {
        let masculino = document.querySelector("#masculino");
        let feminino = document.querySelector("#feminino");
        if (masculino.checked) {
            return "masculino";
        } else if (feminino.checked) {
            return "feminino";
        } else {
            return alert("selecione um gênero");
        }
    };

    let exibirMensagem = (mensagem) => {
        let resultado = document.querySelector("#output");
        resultado.innerHTML = mensagem;
        resultado.style.textAlign = "center";
    };

    let exibirImagem = (defineImagem) => {
        let imagem = document.querySelector("#imagem");
        imagem.style.display = "block";
    };

    let resultadoVerificar = () => {
        let genero = defineGenero();
        let idade = defineIdade();

        if (genero === "masculino" && idade < 3) {
            exibirMensagem(`Detectamos um bebê de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/bebe.png"));
            //luh

        } else if (genero === "feminino" && idade < 3) {
            exibirMensagem(`Detectamos um bebê de ${idade} anos que tem o gênero ${genero}`);

        } else if (genero === "masculino" && idade < 12) {
            exibirMensagem(`Detectamos uma criança de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/crianca.png"));
            //luh criança

        } else if (genero === "feminino" && idade < 12) {
            exibirMensagem(`Detectamos uma criança de ${idade} anos que tem o gênero ${genero}`);

        } else if (genero === "masculino" && idade < 18) {
            exibirMensagem(`Detectamos um adolescente de ${idade} anos que tem o gênero ${genero}`);

        } else if (genero === "feminino" && idade < 18) {
            exibirMensagem(`Detectamos um adolescente de ${idade} anos que tem o gênero ${genero}`);

        } else if (genero === "masculino" && idade < 30) {
            exibirMensagem(`Detectamos um jovem adulto de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/william.png"));
            //william

        } else if (genero === "feminino" && idade < 30) {
            exibirMensagem(`Detectamos um jovem adulto de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/erick.png"));
            //erick

        } else if (genero === "masculino" && idade < 50) {
            exibirMensagem(`Detectamos um adulto médio de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/edson.png"));

        } else if (genero === "feminino" && idade < 50) {
            exibirMensagem(`Detectamos um adulto médio de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/carol.png"));
            // carol

        } else if (genero === "masculino" && idade < 65) {
            exibirMensagem(`Detectamos media-idade de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/elias.png"));
            //elias

        } else if (genero === "feminino" && idade < 65) {
            exibirMensagem(`Detectamos media-idade de ${idade} anos que tem o gênero ${genero}`);
            exibirImagem((imagem.src = "imagens-ex2/neire.png"));
            //neire

        } else if (genero === "masculino" && idade > 65) {
            exibirMensagem(`Detectamos media-idade de ${idade} anos que tem o gênero ${genero}`);

        } else if (genero === "feminino" && idade > 65) {
            exibirMensagem(`Detectamos terceira-idade de ${idade} anos que tem o gênero ${genero}`);

        } else {
            exibirMensagem("Erro");
        }
    };

    document.querySelector("#verificar").addEventListener("click", resultadoVerificar);
})();
