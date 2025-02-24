let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let playerNames = { X: 'Jogador X', O: 'Jogador O' }
let scores = { X: 0, O: 0, draw: 0 }

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function startGame() {
  const playerXInput = document.getElementById('playerX').value
  const playerOInput = document.getElementById('playerO').value

  if (playerXInput.trim() !== '') playerNames.X = playerXInput
  if (playerOInput.trim() !== '') playerNames.O = playerOInput

  document.getElementById('playerXName').innerText = playerNames.X
  document.getElementById('playerOName').innerText = playerNames.O
}

function placeMark(index) {
  if (board[index] === '') {
    board[index] = currentPlayer
    document.getElementsByClassName('cell')[index].innerText = currentPlayer

    if (checkWin()) {
      alert(`${playerNames[currentPlayer]} venceu!`)
      scores[currentPlayer]++
      updateScoreboard()
      resetGame()
    } else if (!board.includes('')) {
      alert('O jogo terminou em empate!')
      scores.draw++
      updateScoreboard()
      resetGame()
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination
    return board[a] && board[a] === board[b] && board[a] === board[c]
  })
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  Array.from(document.getElementsByClassName('cell')).forEach(
    cell => (cell.innerText = '')
  )
}

function updateScoreboard() {
  document.getElementById('scoreX').innerText = scores.X
  document.getElementById('scoreO').innerText = scores.O
  document.getElementById('scoreDraw').innerText = scores.draw
}

function resetAll() {
  scores = { X: 0, O: 0, draw: 0 }
  updateScoreboard()
  resetGame()
}
