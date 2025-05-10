import { displayOutput } from "./display.js";
import {result, handleEqualInput} from './input-handler.js'

let operators = ['+', '-', '*', '/'];
const OPERATOR_PRIORITY = {'+' : 1, '-' : 1, '*' : 2, '/' : 2};

export function tokenize(expression) {
    let formatted = expression.replace(/\+/g, ' + ')
    .replace(/\-/g, ' - ')
    .replace(/\*/g, ' * ')
    .replace(/\//g, ' / ');
    return formatted.trim().split(' ');
}

export function evaluateExpression(){
    if(handleEqualInput() === false){
      return;
    }
    let token = tokenize(result);
    console.log(token)
    let numberStack = [];
    let operatorStack = [];
    token.forEach( item => {
        if( !isNaN(parseFloat(item)) ) {
            numberStack.push(parseFloat(item))
        }
        else if ( operators.includes(item) ) {
            while (
                operatorStack.length > 0 
                && OPERATOR_PRIORITY[operatorStack[operatorStack.length-1]] 
                >= OPERATOR_PRIORITY[item]
            ) {
                const operator = operatorStack.pop();
                const b = numberStack.pop();
                const a = numberStack.pop();
                numberStack.push( performOperation(a, b, operator) );
            }
            operatorStack.push(item);
        }
    });
    while(operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const b = numberStack.pop();
        const a = numberStack.pop();
        numberStack.push( performOperation(a, b, operator) );
    }
    displayOutput(numberStack[0]);
}

export function performOperation(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-': 
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (a === 0 || b === 0) {
        throw new Error('나누기 시 -> 분자,분모가 0으로 들어올 수 없습니다');
      }
      return a / b;
    default:
      throw new Error('지원하지 않는 연산자입니다: ' + operator);
  }
}

