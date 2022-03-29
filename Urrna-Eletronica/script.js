let seuVotoPara = document.querySelector('.D-1-1 span');
let cargo = document.querySelector('.D-1-2 span');
let descricao = document.querySelector('.D-1-4')
let aviso = document.querySelector('.D-2');
let lateral = document.querySelector('.D-1-right');
let numeros = document.querySelector('.D-1-3');

let etapaAtual = 0;


function comecarEtapa() {
    let etapa = etapas[etapaAtual];


    for (let i = 0; i < etapa.numeros; i++) {
        numeroHtml += '<div class="numero"></div>';
    };

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTMl = '';
    numeros.innerHTML = numeroHtml

}

function clicou(n) {
    alert("Clicou em " + n);
}
function branco() {
    alert("Clicou em Branco");
}
function corrige() {
    alert("Clicou em Corrige");
}
function confirma() {
    alert("Clicou em Confirma");
}


comecarEtapa();