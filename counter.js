let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
  console.log("button clicked")
  errorParagraph.textContent = "Something went wrong, please try again"
}

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr

  count = 0
  countEl.textContent = count
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
  let result = num1 + num2
  sumEl.textContent = "Sum: " + result
}

function subtract() {
  let result = num1 - num2
  sumEl.textContent = "Sum: " + result
}

function divide() {
  let result = num1 / num2
  sumEl.textContent = "Sum: " + result
}

function multiply() {
  let result = num1 * num2
  sumEl.textContent = "Sum: " + result
}

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳")
  hasBlackJack = true
} else {
  console.log("You're out of the game! 😭")
  isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)
