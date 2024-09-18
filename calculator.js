let operator
let num1 = 0
let num2 = 0

const displayText = document.querySelector(".cal-display-text")


function initializeButtonEvents () {
  const buttons = document.querySelectorAll(".num-button")
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      displayText.textContent += button.textContent
    })
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
      add(num1, num2)
      break;

    case "-":
      subtract(num1, num2)
      break;
  
    case "*":
      multiply(num1, num2)
      break;

    case "/":
      divide(num1, num2)
      break;

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
  return arr.reduce((total, num) => total * num)
};

function divide(arr) {
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
