// 필요 모듈
const evaluateExpression = require('./calculator.js');
const {displayInput, displayClearAll} = require('./display.js');

// 필요 변수
let result = "";
let calculatorDone = false;
let operators = ['+', '-', '*', '/'];

// 로직
function eventStart(){
  document.querySelectorAll('.button_container > div').forEach((element) => {
      element.addEventListener('click', (event) => {
          let text = event.target.innerText
          switch (text) {
              case '<' : handleClearInput(); break;
              case 'AC' : handleAllClearInput(); break;
              case '=' : evaluateExpression(); break;
              default : handleExpressionInput(text);
          }
      });
  });
}

function handleExpressionInput(text) {
  if( !isNaN(parseFloat(text)) ) {
    handleNumInput(text)
  }
  else {
    handleOperatorInput(text)
  }
  displayInput(result);
}

function handleNumInput(text) {
  if(calculatorDone) { 
    result = "";
    displayClearAll();
  }
  calculatorDone = false;
  result += text;
  displayInput(result);
}

function handleOperatorInput(text) {
  if(result.length === 0) { // 처음 연산자부터 입력 시 => "0"을 초기값으로 두고 계산
    return result = "0" + text;
  }
  if( operators.includes(result.slice(-1)) ) {
    alert("연산자 연속 입력 불가");
    return false;
  }
  result += text;
}

function handleEqualInput() {
  if( operators.includes(result.slice(-1)) ) {
    alert("숫자를 입력해주세요.");
    return false;
  }
  calculatorDone = true;
}

function handleClearInput() {
    result = result.slice(0, result.length-1);
    displayInput(result);
}

function handleAllClearInput() {
    result = "";
    displayClearAll();
}


module.exports = {result, eventStart, handleExpressionInput, handleNumInput, handleOperatorInput, handleEqualInput, handleClearInput, handleAllClearInput}