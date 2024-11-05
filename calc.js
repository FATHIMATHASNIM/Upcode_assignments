let currentInput = "";
let operator = "";
let previousInput = "";
let resultDisplayed = false;

function displayClear() {
  currentInput = "";
  previousInput = "";
  operator = "";
  resultDisplayed = false;
  document.getElementById("res").value = "";
}

function show(input) {
  if (resultDisplayed) {
    currentInput = "";
    resultDisplayed = false;
  }
  currentInput += input;
  document.getElementById("res").value = currentInput;
}

function setOperator(op) {
  if (currentInput === "" && previousInput !== "") {
    operator = op;
    return;
  }

  if (previousInput === "") {
    previousInput = currentInput;
  } else {
    calculateResult();
  }
  operator = op;
  currentInput = "";
}

function calculateResult() {
  let result;
  var num1 = parseFloat(previousInput);
  var num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = num2; // In case of first input with no previous operator
  }
  previousInput = result.toString();
  document.getElementById("res").value = result;
  resultDisplayed = true;
}

function displayResult() {
  calculateResult();
  currentInput = "";
  operator = "";
}
