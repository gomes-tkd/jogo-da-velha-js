const tabuleiro = document.querySelector(".tabuleiro");
const tabuleiroLinhas = document.querySelectorAll("tr");
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
    if (turnoContador <= 8) {

        if (turnoContador % 2 !== 0) {
            x.innerHTML = "X";
        } else {
            x.innerHTML = "O";
        }
    } else {
        alert("VELHA, deu empate! Limite máximo de movimentos alcançado!");
        empateContador++;
        totalPartidasContador++;

        resultadoEmpate.innerHTML = empateContador.toString();
        totalPartidas.innerHTML = totalPartidasContador.toString();
        turno.innerHTML = turnoContador.toString();

        tabuleiroCelulas.forEach(e => e.innerHTML = "");
        turnoContador = 0;

    }
    turnoContador++;

    turno.innerHTML = turnoContador.toString();

}
