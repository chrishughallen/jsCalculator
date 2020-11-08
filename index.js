document.addEventListener("DOMContentLoaded", initialize)
const display = document.querySelector('.js-screen')
const history = document.querySelector('.js-history')
let memory = []
let result = 0

function initialize () {
  let btns = Array.from(document.querySelectorAll('.js-btn'))
  btns.forEach(function(btn) {
    btn.addEventListener("click", calculate)
  })
}





function calculate () {
  if (event.target.dataset.val === "C") {
    memory = []
    display.innerText = ""
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
    //if user presses equals when there is nothing in the display show an error
    if (display.innerText == "" || display.innerText == "Try starting with a number...") {
      memory = []
      display.innerText = "Try starting with a number..."
      return
    }
    memory.push(display.innerText)
    console.log(memory)
    let answer = eval(memory.join(""))
    display.innerText = answer
    memory = []
  }
}
