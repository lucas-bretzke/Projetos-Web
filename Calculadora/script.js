let resultado = document.getElementById('resultado')

function adicionar(valor) {
  if (resultado.innerText === '0') {
    resultado.innerText = valor
  } else {
    resultado.innerText += valor
  }
}

function limpar() {
  resultado.innerText = '0'
}

function apagar() {
  if (resultado.innerText.length > 1) {
    resultado.innerText = resultado.innerText.slice(0, -1)
  } else {
    resultado.innerText = '0'
  }
}

function calcular() {
  try {
    resultado.innerText = eval(resultado.innerText)
  } catch (e) {
    resultado.innerText = 'Erro'
  }
}
