import { evaluateExpression } from "./calculator.js";
import { displayInput, displayClearAll } from "./display.js";

let result = "";
let isOperationComplete = false;
let operators = ["+", "–", "×", "÷"];

function handleButtonClick() {
  document.querySelectorAll(".button_container > div").forEach((element) => {
    element.addEventListener("click", (event) => {
      handleButtonEvent(event);
    });
  });
}

function handleButtonEvent(event) {
  let text = event.target.innerText;
  switch (text) {
    case "<":
      handleClearInput();
      break;
    case "AC":
      handleAllClearInput();
      break;
    case "=":
      handleEqualInput();
      break;
    default:
      handleExpressionInput(text);
  }
}
function handleExpressionInput(text) {
  if (!isNaN(parseFloat(text)) || text === ".") {
    handleNumInput(text);
  } else {
    handleOperatorInput(text);
  }

  if (!operators.includes(result.slice(-1)) && result.length > 0) {
    evaluateExpression(result);
  }
  displayInput(result);
}

function handleNumInput(text) {
  if (isOperationComplete) {
    result = "";
    displayClearAll();
  }
  isOperationComplete = false;
  result += text;
}

function handleOperatorInput(text) {
  if (result.length === 0) {
    result = "0" + text;
    return;
  }
  if (operators.includes(result.slice(-1))) {
    result = result.slice(0, result.length - 1).replace(text);
  }
  if (isOperationComplete) {
    isOperationComplete = false;
  }
  result += text;
}

function handleEqualInput() {
  if (operators.includes(result.slice(-1))) {
    alert("숫자를 입력해주세요.");
    return false;
  }
  isOperationComplete = true;
  evaluateExpression(result);
  return true;
}

function handleClearInput() {
  result = result.slice(0, result.length - 1);
  displayInput(result);
}

function handleAllClearInput() {
  result = "";
  displayClearAll();
}

export {
  handleButtonClick,
  handleExpressionInput,
  handleNumInput,
  handleOperatorInput,
  handleEqualInput,
  handleClearInput,
  handleAllClearInput,
};
