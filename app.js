import { add, subtract, multiply, divide, getNumber } from './mathUtils.js';

const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalsButton');

addButton.addEventListener('click', () => {
    const numberOne = getNumber('addOne');
    const numberTwo = getNumber('addTwo');
    const answer = add(numberOne, numberTwo);
    document.getElementById('sum').textContent = answer;

});


subtractButton.addEventListener('click', () => {
    const numberOne = getNumber('subtractOne');
    const numberTwo = getNumber('subtractTwo');
    const answer = subtract(numberOne, numberTwo);
    document.getElementById('result').textContent = answer;

});

multiplyButton.addEventListener('click', () => {
    const numberOne = getNumber('multiplyOne');
    const numberTwo = getNumber('multiplyTwo');
    const answer = multiply(numberOne, numberTwo);
    document.getElementById('product').textContent = answer;

});

divideButton.addEventListener('click', () => {
    const divideOne = document.getElementById('divideOne');
    const divideTwo = document.getElementById('divideTwo');
    const numberOne = divideOne.value;
    const numberTwo = divideTwo.value;
    const answer = divide(numberOne, numberTwo);
    document.getElementById('quotient').textContent = answer;

});

equalsButton.addEventListener('click', () => {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const numberOne = Number(inputOne.value);
    const numberTwo = Number(inputTwo.value);
    const operand = document.getElementsByName('operand');
    let answer;
    if (operand[0].checked){
        answer = numberOne + numberTwo;
    } else if (operand[1].checked) {
        answer = numberOne - numberTwo;
    } else if (operand[2].checked) {
        answer = numberOne * numberTwo;
    } else if (operand[3].checked) {
        answer = numberOne / numberTwo;
    }

    document.getElementById('answer').textContent = answer;

});
