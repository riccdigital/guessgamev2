
// Game Variables
const guess = 1 + Math.floor(Math.random() * 50)
let playerGuess = 0
let guessesRemaining = 10
let guessesMade = 0
let gameState = ''
let gameWon = false

// Input & Output
const input = document.getElementById('input')
const output = document.getElementById('output')

const button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click', clickHandler, false)

function clickHandler () {
  playGame()
}

function playGame () {
  guessesRemaining = guessesRemaining - 1
  guessesMade = guessesMade + 1
  gameState = 'Guess: ' + guessesMade + ', Remaining: ' + guessesRemaining
  playerGuess = Number(input.value)

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
}

function endGame () {
  if (gameWon) {
    output.innerHTML = "Yes, it's" + guess + '!' + '<br>' + 'It only took you' + guessesMade + ' guesses.'
  } else {
    output.innerHTML = 'No more guesses left!' + '<br>' + 'The mystery number was: ' + guess + '.'
  }
}
