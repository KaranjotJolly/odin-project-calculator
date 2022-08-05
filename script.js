let currentOperator = null;
let firstInput = '';
let secondInput = '';
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.num-button');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsToButton = document.querySelector('.equals');
const clearButton = document.getElementById("clear");
const deleteButton = document.querySelector('.delete')

const valueDisplay = document.getElementById('value-display');
const lastValueDisplay = document.getElementById('last-value-display')


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setNumberValue(button.textContent)
    })
})

operatorsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setOperatorValue(button.textContent)
    })
})

deleteButton.addEventListener('click', () => {
    valueDisplay.textContent = valueDisplay.textContent.slice(0, -1)
})

clearButton.addEventListener('click', () => {
    clearInput()
})

function resetScreen() {
    valueDisplay.textContent = ''
    shouldResetScreen = false;
}

if(shouldResetScreen) {
    resetScreen()
}
  

function setNumberValue(number) {
    if (valueDisplay.textContent === '0' || shouldResetScreen)
    resetScreen()
    valueDisplay.textContent += number
}

function setOperatorValue(value) {
    if (currentOperator !== null) evaluate()
    currentOperator = value;
    // valueDisplay.textContent += currentOperator;

    firstInput = valueDisplay.textContent;
    lastValueDisplay.textContent = `${firstInput} ${currentOperator}`;

    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return
    // const splitStr = valueDisplay.textContent.split(currentOperator);

    if(currentOperator === '÷' && +splitStr[1] === 0) {
        alert("Cannot divide number by 0.")
    }

    secondInput = valueDisplay.textContent;

    const result = operate(currentOperator, +firstInput, +secondInput);
    lastValueDisplay.textContent = `${firstInput} ${currentOperator} ${secondInput} =`
    
    valueDisplay.textContent = result;
    currentOperator = null
}

equalsToButton.addEventListener('click', () => {
    evaluate()
})

function clearInput() {
    currentOperator = null;
    valueDisplay.textContent = '0'
    lastValueDisplay.textContent = ''
}

// Add function
const add = (num1, num2) => {
	return num1 + num2
};

// Subtract function
const subtract = (num1, num2) => {
	return num1 - num2
};

// Multiply function
const multiply = (num1, num2) => {
    return num1 * num2              
};

// Divide function
const divide = (num1, num2) => {
    return num1 / num2
}

const operate = (operator, num1, num2) => {
    switch(operator) {
        case "+":
            return add(num1, num2)
        break;

        case "-":
            return subtract(num1, num2);
        break;

        case "÷":
            if (num2 === 0) return null
            else return divide(num1, num2)
        break;

        case '×':
            return multiply(num1, num2)
        break;

        default: 
        return;
    }
}                                    