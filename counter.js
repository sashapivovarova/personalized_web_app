let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count = count + 1
  countEl.innerText = count
}

let title = document.getElementById("title")
title.innerText = "I'd like to change \"the title of the page\""