(function () {
    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
    var hourNow = document.querySelector("#hour-now");
    var timeImg = document.querySelector("#time-img");

    if (horas > 5 && horas < 12) {
        hourNow.innerHTML = `Agora são ${horas}:${minutos} horas`;
        timeImg.src = "imagens/manha.png";
        document.body.style.backgroundColor = "rgba(133, 133, 17, 0.501)";
    } else if (horas > 12 && horas < 19) {
        hourNow.innerHTML = `Agora são ${horas}:${minutos} horas`;
        timeImg.src = "imagens/tarde.png";
        document.body.style.backgroundColor = "rgba(90, 39, 39, 0.849)";
    } else {
        hourNow.innerHTML = `Agora são ${horas}:${minutos} horas`;
        timeImg.src = "imagens/noite.png";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.849)";
    }
})();
