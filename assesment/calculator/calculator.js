(function() {
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    };

    function updateDisplay() {
        const display = document.querySelector('#display');
        display.textContent = calculator.displayValue;
    }

    function inputDigit(digit) {
        const { displayValue, waitingForSecondOperand } = calculator;

        if (waitingForSecondOperand === true) {
            calculator.displayValue = digit;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = displayValue === '0' ?
            digit : displayValue + digit;
        }

        updateDisplay();
    }

    function inputDecimal(dot) {
        if (calculator.waitingForSecondOperand === true) return;

        if (!calculator.displayValue.includes(dot)) {
            calculator.displayValue += dot;
        }

        updateDisplay();
    }

    function handleOperator(nextOperator) {
        const { firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);

        if (operator && calculator.waitingForSecondOperand)  {
            calculator.operator = nextOperator;
            return;
        }

        if (firstOperand == null && !isNaN(inputValue)) {
            calculator.firstOperand = inputValue;
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);

            calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
            calculator.firstOperand = result;
        }

        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;

        updateDisplay();
    }

    function calculate(firstOperand, secondOperand, operator) {
        if (operator === '+') {
            return firstOperand + secondOperand;
        } else if (operator === '-') {
            return firstOperand - secondOperand;
        } else if (operator === 'x') {
            return firstOperand * secondOperand;
        } else if (operator === '÷') {
            return firstOperand / secondOperand;
        }

        return secondOperand;
    }

    function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
        updateDisplay();
    }

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', event => {
        const { target } = event;

        if (!target.matches('button')) {
            return;
        }

        if (target.dataset.action === 'number') {
            inputDigit(target.textContent);
        } else if (target.dataset.action === 'decimal') {
            inputDecimal(target.textContent);
        } else if (target.dataset.action === 'clear') {
            resetCalculator();
        } else if (target.dataset.action === 'equals') {
            handleOperator(calculator.operator);
        } else {
            handleOperator(target.textContent);
        }
    });

    updateDisplay();
})();
