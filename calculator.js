let operator = null;
let firstOperand = 0;
let secondOperand = 0;
let newOperation = true;
let clear = false;

const displayText = document.querySelector(".cal-display-text");


function initializeButtonEvents() {
  const numButtons = document.querySelectorAll(".num-button");
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (displayText.textContent.length > 19) {
        return
      }

      if (clear && !newOperation) {
        clearDisplay()
      }
      else if (clear) {
        displayText.textContent = "";
        clear = false;
      }
      displayText.textContent += button.textContent;
    })
  })

  const operatorButtons = document.querySelectorAll(".operation-button");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFirstOperand(displayText.textContent)
      setOperator(button.textContent);

      clear = true;
      newOperation = true;
    })
  })

  document.querySelector(".operate-button").addEventListener("click", () => {
    if (displayText.textContent === "" || operator === null) {
      return
    }

    if (newOperation) {
      setSecondOperand(displayText.textContent);
      newOperation = false;
    }

    console.log(`${firstOperand} ${operator} ${secondOperand}`);
    setFirstOperand(operate(operator, firstOperand, secondOperand));
    displayText.textContent = firstOperand;
    clear = true
  })

  document.querySelector(".cal-clear-button").addEventListener("click", () => clearDisplay())
}

function clearDisplay() {
  displayText.textContent = "";
  firstOperand = 0;
  secondOperand = 0;
  operator = null;
  newOperation = true;
  clear = false
}

function setFirstOperand(num) {
  firstOperand = parseFloat(num)
}

function setSecondOperand(num) {
  secondOperand = parseFloat(num)
}

function setOperator(operation) {
  operator = operation
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);

    case "-":
      return subtract(firstOperand, secondOperand);

    case "*":
      return multiply(firstOperand, secondOperand);

    case "/":
      return divide(firstOperand, secondOperand);

    default:
      break;
  }
}

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

initializeButtonEvents();
