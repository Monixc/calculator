import { displayOutput } from "./display.js";

let operators = ["+", "-", "*", "/"];
let OPERATOR_PRIORITY = { "+": 1, "-": 1, "*": 2, "/": 2 };

function tokenize(expression) {
  let formatted = expression
    .replace(/÷/g, " / ")
    .replace(/×/g, " * ")
    .replace(/\+/g, " + ")
    .replace(/–/g, " - ");

  return formatted.trim().split(" ");
}

function evaluateExpression(expression) {
  let token = tokenize(expression);

  let numberStack = [];
  let operatorStack = [];
  token.forEach((item) => {
    if (!isNaN(parseFloat(item))) {
      numberStack.push(parseFloat(item));
    } else if (operators.includes(item)) {
      while (
        operatorStack.length > 0 &&
        OPERATOR_PRIORITY[operatorStack[operatorStack.length - 1]] >=
          OPERATOR_PRIORITY[item]
      ) {
        const operator = operatorStack.pop();
        const b = numberStack.pop();
        const a = numberStack.pop();
        numberStack.push(performOperation(a, b, operator));
      }
      operatorStack.push(item);
    }
  });
  while (operatorStack.length > 0) {
    const operator = operatorStack.pop();
    const b = numberStack.pop();
    const a = numberStack.pop();
    numberStack.push(performOperation(a, b, operator));
  }
  displayOutput(numberStack[0]);
}

function performOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        alert("0으로 나눌 수 없습니다");
        return a;
      }
      return a / b;
    default:
      throw new Error("지원하지 않는 연산자입니다: " + operator);
  }
}

export { tokenize, evaluateExpression, performOperation };
