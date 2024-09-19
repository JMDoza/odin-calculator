let operator
let num1 = 0
let num2 = 0
let current = 0

const displayText = document.querySelector(".cal-display-text")


function initializeButtonEvents () {
  const numButtons = document.querySelectorAll(".num-button")
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (current == 1) {
        displayText.textContent = ""
        current = 0
      }
      displayText.textContent += button.textContent
    })
  })

  const operatorButtons = document.querySelectorAll(".operation-button")
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      num1 = parseFloat(displayText.textContent)
      operator = button.textContent
      current = 1
    })
  })

  const operateButton = document.querySelector(".operate-button").addEventListener("click", () => {
    num2 = parseFloat(displayText.textContent)
    console.log(`${num1} ${operator} ${num2}`);
    
    num1 = operate(operator, num1, num2)
    console.log(num1);
    
    displayText.textContent = num1
  })

  const ac = document.querySelector(".cal-clear-button")
  ac.addEventListener("click", () => clearDisplay())
}

function clearDisplay(){
  displayText.textContent = ""
  
}

function operate (operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2)

    case "-":
      return subtract(num1, num2)
  
    case "*":
      return multiply(num1, num2)

    case "/":
      return divide(num1, num2)

    default:
      break;
  }
}

function add(a, b) {
  return a + b
};

function subtract(a, b) {
  return a - b
};

function multiply(arr) {
  arr = [num1, num2]
  return arr.reduce((total, num) => total * num)
};

function divide(arr) {
  let temp = [num1, num2]
  return arr.reduce((total, num) => total / num)
};

initializeButtonEvents()

// function power(a, b) {
//   return Math.pow(a, b)
// };

// function factorial(a) {
//   if (a == 0) {
//     return 1
//   } else {
//     return a * factorial(a - 1)
//   }
// };
