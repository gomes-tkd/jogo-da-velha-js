const jogadorVez = document.querySelector(".jogador-vez");
const turno = document.querySelector(".turno");
const tabuleiro = document.querySelectorAll("td");
const resultadoX = document.querySelector(".resultado-x");
const resultadoO = document.querySelector(".resultado-o");
const resultadoEmpate = document.querySelector(".resultado-empate");
const totalPartidas = document.querySelector(".total-partidas");

let turnoContador = 0;
let vitoriaXContador = 0;
let vitoriaOContador = 0;
let empateContador = 0;
let totalPartidasContador = 0;

function handleTurn() {
    if (turnoContador % 2 !== 0) {
        jogadorVez.innerHTML = "X";
    } else {
        jogadorVez.innerHTML = "O";
    }
    turno.innerHTML = turnoContador.toString();
    turnoContador++;
}


function handleCondicaoVitoria() {
    if (tabuleiro[0].innerHTML === "X" && tabuleiro[1].innerHTML === "X" && tabuleiro[2].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[3].innerHTML === "X" && tabuleiro[4].innerHTML === "X" && tabuleiro[5].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[6].innerHTML === "X" && tabuleiro[7].innerHTML === "X" && tabuleiro[8].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[0].innerHTML === "X" && tabuleiro[3].innerHTML === "X" && tabuleiro[6].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[1].innerHTML === "X" && tabuleiro[4].innerHTML === "X" && tabuleiro[7].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[2].innerHTML === "X" && tabuleiro[5].innerHTML === "X" && tabuleiro[8].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[0].innerHTML === "X" && tabuleiro[4].innerHTML === "X" && tabuleiro[8].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if  (tabuleiro[2].innerHTML === "X" && tabuleiro[6].innerHTML === "X" && tabuleiro[4].innerHTML === "X") {
        vitoriaXContador++;
        totalPartidasContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[0].innerHTML === "O" && tabuleiro[1].innerHTML === "O" && tabuleiro[2].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[3].innerHTML === "O" && tabuleiro[4].innerHTML === "O" && tabuleiro[5].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[6].innerHTML === "O" && tabuleiro[7].innerHTML === "O" && tabuleiro[8].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[0].innerHTML === "O" && tabuleiro[3].innerHTML === "O" && tabuleiro[6].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[1].innerHTML === "O" && tabuleiro[4].innerHTML === "O" && tabuleiro[7].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[2].innerHTML === "O" && tabuleiro[5].innerHTML === "O" && tabuleiro[8].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else if (tabuleiro[0].innerHTML === "O" && tabuleiro[4].innerHTML === "O" && tabuleiro[8].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    }else if (tabuleiro[2].innerHTML === "O" && tabuleiro[4].innerHTML === "O" && tabuleiro[6].innerHTML === "O") {
        vitoriaOContador++;
        totalPartidasContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    } else {
        empateContador++;
        totalPartidasContador++;
        resultadoEmpate.innerHTML = empateContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
    }
}
