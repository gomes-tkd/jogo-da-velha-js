const jogadorAtual = document.querySelector(".jogador-atual");
const tabuleiroCelulas = document.querySelectorAll("td");
const resultadoX = document.querySelector(".resultado-x");
const resultadoO = document.querySelector(".resultado-o");
const resultadoEmpate = document.querySelector(".resultado-empate");
const totalPartidas = document.querySelector(".total-partidas");
const turno = document.querySelector(".turno");

let turnoContador = 0;
let vitoriaXContador = 0;
let vitoriaOContador = 0;
let empateContador = 0;
let totalPartidasContador = 0;


function handleTurno(x) {
    const tabuleiro = document.querySelector(".tabuleiro").rows;

    if (turnoContador <= 8) {
        if (turnoContador % 2 !== 0) {
            x.innerHTML = "X";
        } else {
            x.innerHTML = "O";
        }

    } else {
        alert("VELHA, deu empate! Limite máximo de movimentos alcançado!");
        empateContador++;

        resultadoEmpate.innerHTML = empateContador.toString();
        turno.innerHTML = turnoContador.toString();

        handleClearBoard();
    }

    if (turnoContador % 2 === 0) {
        jogadorAtual.innerHTML = "X";
    } else {
        jogadorAtual.innerHTML = "O";
    }

    handleCondicaoVitoria(tabuleiro);
    turnoContador++;

    turno.innerHTML = turnoContador.toString();

}

function handleCondicaoVitoria(tabuleiro) {
    if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[0].cells[1].innerHTML === "X" && tabuleiro[0].cells[2].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[1].cells[0].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[1].cells[2].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[2].cells[0].innerHTML === "X" && tabuleiro[2].cells[1].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[1].cells[0].innerHTML === "X" && tabuleiro[2].cells[0].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[1].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[1].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[2].innerHTML === "X" && tabuleiro[1].cells[2].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[2].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[0].innerHTML === "X" ) {
        vitoriaXContador++;
        resultadoX.innerHTML = vitoriaXContador.toString();
        alert("Jogador X venceu!");
        handleClearBoard();
    }

    else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[0].cells[1].innerHTML === "O" && tabuleiro[0].cells[2].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[1].cells[0].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[1].cells[2].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[2].cells[0].innerHTML === "O" && tabuleiro[2].cells[1].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[1].cells[0].innerHTML === "O" && tabuleiro[2].cells[0].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[1].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[1].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[2].innerHTML === "O" && tabuleiro[1].cells[2].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O") {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    } else if (tabuleiro[0].cells[2].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[0].innerHTML === "O" ) {
        vitoriaOContador++;
        resultadoO.innerHTML = vitoriaOContador.toString();
        alert("Jogador O venceu!");
        handleClearBoard();
    }
}

function handleClearBoard() {
    tabuleiroCelulas.forEach(e => e.innerHTML = "");
    turnoContador = 0;
    turno.innerHTML = turnoContador.toString();
    totalPartidasContador++;
    totalPartidas.innerHTML = totalPartidasContador.toString();
}