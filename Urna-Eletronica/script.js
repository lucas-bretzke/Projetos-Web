let seuVotoPara = document.querySelector('.D-1-1 span');
let cargo = document.querySelector('.D-1-2 span');
let descricao = document.querySelector('.D-1-4');
let aviso = document.querySelector('.D-2');
let lateral = document.querySelector('.D-1-right');
let numeros = document.querySelector('.D-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"> </div>';
        } else {
            numeroHtml += '<div class="numero"> </div>';
        }
    }

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}


function atualizaInterface() {

}


function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = '${numero}${n}';
    }
}

function branco(branco) {
    alert("clicou em Branco")
}

function corrige(corrige) {
    alert("clicou em Corrige")
}
function confirma() {
    alert("clicou em Confirma")
}


comecarEtapa();