let currentOperator = null;
let firstInput = '';
let secondInput = '';
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.num-button');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsToButton = document.querySelector('.equals');
const clearButton = document.getElementById("clear");
const deleteButton = document.querySelector('.delete');
const decimalButton = document.querySelector('decimal-button')

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
    backspace()
})
    

function backspace() {
    valueDisplay.textContent = valueDisplay.textContent.slice(0, -1)
}

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

function roundTo(num) {
    return parseFloat(num.toFixed(4))
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

    if(currentOperator === '÷' && secondInput === 0) {
        alert("Cannot divide number by 0.")
    }

    secondInput = valueDisplay.textContent;

    const result = operate(currentOperator, +firstInput, +secondInput);
    const displayValue = roundTo(result)

    lastValueDisplay.textContent = `${firstInput} ${currentOperator} ${secondInput} =`
    
    valueDisplay.textContent = displayValue;
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

// Keyboadr Support
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 48) {
        setNumberValue("0")
    }
    else if(event.keyCode == 49) {
        setNumberValue("1")
    }
    else if(event.keyCode == 50) {
        setNumberValue("2");
    }
    else if(event.keyCode == 51) {
        setNumberValue("3");
    }
    else if(event.keyCode == 52) {
       setNumberValue("4");
    }
    else if(event.keyCode == 53) {
       setNumberValue("5");
    }
    else if(event.keyCode == 54) {
        setNumberValue("6");
    }
    else if(event.keyCode == 55) {
        setNumberValue("7");
    }
    else if(event.keyCode == 56) {
        setNumberValue("8");
    }
    else if(event.keyCode == 57) {
        setNumberValue("9");
    }
    else if(event.keyCode == 8) {
        backspace()
    }
    else if(event.key == "+") {
        setOperatorValue("+")
    }
    else if(event.key == "-") {
        setOperatorValue("-")
    }
    else if(event.key == "*") {
        setOperatorValue("×")
    }
    else if(event.key == "/") {
        setOperatorValue("÷")
    }
    else if(event.keyCode == 13) {
        evaluate()
    }
});

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
            return divide(num1, num2)
        break;

        case '×':
            return multiply(num1, num2)
        break;

        default: 
        return;
    }
}                                    