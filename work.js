let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  // renderLead()
  ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
  inputEl.value = ""
})

// function renderLead() {
//   let listItem = "<li>" + inputEl.value + "</li>"
//   ulEl.innerHTML += listItem
// }