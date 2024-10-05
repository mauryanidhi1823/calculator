const display = document.getElementById("calc");
let currentInput = '';
let operator = '';
let firstNumber = null;

// Update display function
function updateDisplay(value) {
    display.value = value;  // This updates the calculator's display
}

// Event delegation for button clicks
document.getElementById('buttons').addEventListener('click', (event) => {
    const target = event.target;

    // Check if a number button was clicked
    if (target.classList.contains('number-button')) {
        currentInput += target.textContent;
        updateDisplay(currentInput);
    }

    // Check if an operation button was clicked
    if (target.classList.contains('operation')) {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            operator = target.getAttribute('data-operator');
            currentInput += ` ${operator} `;
            updateDisplay(currentInput)
        }

    }

    // Check if the equals button was clicked
    if (target.id === 'equals') {
        const [num1, operator, num2] = currentInput.split(' ');

        if (num1 && operator && num2) {
            const firstNumber = parseFloat(num1);
            const secondNumber = parseFloat(num2);
            let result;


            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
                    break;
                default:
                    result = 'Error';
            }

            updateDisplay(result);
            firstNumber = null; // Reset after calculation
            currentInput = '';
            operator = '';
        }
    }

    // Clear button functionality
    if (target.id === 'clear') {
        currentInput = '';
        firstNumber = null;
        operator = '';
        updateDisplay('');
    }
});
