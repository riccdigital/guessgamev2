
// Game Variables
const guess = Math.ceil(Math.random() * 50)
let playerGuess = 0
let guessesRemaining = 10
let guessesMade = 0
let gameState = ''
let gameWon = false
const pointer = document.getElementById('pointer')

// Input & Output
const input = document.getElementById('input')
const output = document.getElementById('output')

const button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click', clickHandler, false)
window.addEventListener('keydown', keydownHandler, false)

function keydownHandler (event) {
  if (event.keyCode === 13) {
    validateInput()
  }
}

function clickHandler () {
  validateInput()
}

function validateInput () {
  playerGuess = parseInt(input.value)
  if (isNaN(playerGuess)) {
    output.innerHTML = 'Please enter a number.'
  } else {
    playGame()
  }
}

function playGame () {
  guessesRemaining = guessesRemaining - 1
  guessesMade = guessesMade + 1
  gameState = 'Guess: ' + guessesMade + ', Remaining: ' + guessesRemaining

  if (playerGuess > guess) {
    output.innerHTML = 'That is too high! ' + gameState
    if (guessesRemaining < 1) {
      endGame()
    }
  } else if (playerGuess < guess) {
    output.innerHTML = 'That is too low! ' + gameState
    if (guessesRemaining < 1) {
      endGame()
    }
  } else if (playerGuess === guess) {
    gameWon = true
    endGame()
  }
  render()
}

function render () {
  pointer.style.left = playerGuess * 3 + 'px'
}

function endGame () {
  if (gameWon) {
    output.innerHTML = "Yes, it's" + guess + '!' + '<br>' + 'It only took you' + guessesMade + ' guesses.'
  } else {
    output.innerHTML = 'No more guesses left!' + '<br>' + 'The mystery number was: ' + guess + '.'
  }
  // Disable button
  button.removeEventListener('click', clickHandler, false)
  button.disabled = true

  // Disable the Enter Key
  window.removeEventListener('keydown', keydownHandler, false)

  // Disable the input
  input.disabled = true
}
