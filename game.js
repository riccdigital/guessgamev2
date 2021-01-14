
// Game Variables
const guess = 50
let playerGuess = 0

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
  playerGuess = Number(input.value)

  if (playerGuess > guess) {
    output.innerHTML = 'That is too high!'
  } else if (playerGuess < guess) {
    output.innerHTML = 'That is too low!'
  } else if (playerGuess === guess) {
    output.innerHTML = 'Got It!!!'
  }
}
