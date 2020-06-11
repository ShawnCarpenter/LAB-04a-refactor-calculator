import { add } from './mathUtils.js';

const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalsButton');

addButton.addEventListener('click', () => {
    const addOne = document.getElementById('addOne');
    const addTwo = document.getElementById('addTwo');
    const numberOne = Number(addOne.value);
    const numberTwo = Number(addTwo.value);
    const answer = add(numberOne, numberTwo);
    document.getElementById('sum').textContent = answer;

});


subtractButton.addEventListener('click', () => {
    const subtractOne = document.getElementById('subtractOne');
    const subtractTwo = document.getElementById('subtractTwo');
    const numberOne = Number(subtractOne.value);
    const numberTwo = Number(subtractTwo.value);
    const answer = numberOne - numberTwo;
    document.getElementById('result').textContent = answer;

});


divideButton.addEventListener('click', () => {
    const divideOne = document.getElementById('divideOne');
    const divideTwo = document.getElementById('divideTwo');
    const numberOne = Number(divideOne.value);
    const numberTwo = Number(divideTwo.value);
    const answer = numberOne / numberTwo;
    document.getElementById('quotient').textContent = answer;

});


multiplyButton.addEventListener('click', () => {
    const multiplyOne = document.getElementById('multiplyOne');
    const multiplyTwo = document.getElementById('multiplyTwo');
    const numberOne = Number(multiplyOne.value);
    const numberTwo = Number(multiplyTwo.value);
    const answer = numberOne * numberTwo;
    document.getElementById('product').textContent = answer;

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
