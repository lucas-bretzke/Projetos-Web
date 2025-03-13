const resultados = document.getElementById("resultados");
const resultado = document.getElementById("resultado");
const historico = document.getElementById("historico");
const input = document.getElementById("input");
const h1 = document.getElementById("h1");

const resultadosDosDados = [];
const historicoDeResultados = [];

function girarDados() {
    resultadosDosDados.length = 0;

    const inputValue = parseFloat(input.value);

    if (!inputValue) {
        alert("O valor digitado deve ser um número");
        return;
    }

    if (inputValue > 4) {
        alert("O valor digitado deve ser no máximo 4");
        return;
    }

    const faces = parseInt(document.getElementById("faces").value, 10);
    if (!faces || faces <= 0) {
        alert("O número de faces deve ser um número positivo");
        return;
    }

    const jogador = prompt("Digite seu nome");

    if (!jogador) {
        alert("Nome inválido");
        return;
    }

    for (let i = 0; i < inputValue; i++) {
        const numeroAleatorio = Math.floor(Math.random() * faces) + 1;
        resultadosDosDados.push(numeroAleatorio);
    }

    resultado.textContent = `Resultados: ${resultadosDosDados.join(", ")}`;
    input.value = '';

    historicoDeResultados.push({ nome: jogador, resultado: [...resultadosDosDados] });

    while (historico.firstChild) {
        historico.removeChild(historico.firstChild);
    }

    const p = document.createElement("p");
    p.innerHTML = historicoDeResultados.map(e => `${e.nome} - [${e.resultado.join(", ")}]`).join('<br>');
    historico.appendChild(p);
}