document.addEventListener("DOMContentLoaded", initialize)
const display = document.querySelector('.screen')
let memory = []

function initialize () {
  let btns = Array.from(document.querySelectorAll('.js-btn'))
  btns.forEach(function(btn) {
    btn.addEventListener("click", calculate)
  })
}

function calculate () {
  if (event.target.dataset.val === "C") {
    display.innerText = ""
    memory = []
    return
  }
  // See if btn is a value or an operator
  if (event.target.dataset.type === "value") {
    // if there is something already in the display check if it's a number
    if (display.innerText != "") {
      // if what is on the display is NaN then it's an operator
      if (isNaN(parseFloat(display.innerText))) {
        // Since the operator is there, we need to clear the screen
        display.innerText = ""
      }
    }
    // Update the screen with users new value
    display.innerText += event.target.dataset.val
    // If the input is an operator
  } else if (event.target.dataset.type === "operator") {

    // add the current value or operators to memory
    memory.push(display.innerText)
    display.innerText = event.target.dataset.val
    memory.push(display.innerText)

  } else if (event.target.dataset.type == "equals") {
    memory.push(display.innerText)
    console.log(memory)
  }
}
