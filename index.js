const MAX_DIGITS = 15; // Set your desired max limit here

// Ensure display is selected from the DOM
const display = document.getElementById('display');

function appendToDisplay(input) {
    if (input === 'x') {
        input = '*'; // Replace 'x' with '*' for the calculation
    }
    if (display.value.length >= MAX_DIGITS) {
        return; // Exit if the max limit is reached
    }

    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', '/', '*'];

    // Check if the last character is an operator
    if (operators.includes(lastChar) && operators.includes(input)) {
        return;
    }
    display.value += input === '*' ? 'x' : input; // Display 'x' instead of '*'
    adjustFontSize(); // Call the function to adjust the font size
}

function clearDisplay() {
    display.value = "";
    adjustFontSize(); // Reset font size when display is cleared
}

function calculate() {
    try {
        let expression = display.value.replace(/x/g, '*'); // Replace all 'x' with '*'
        display.value = eval(expression);
        adjustFontSize(); // Call the function to adjust the font size
    } catch (error) {
        // console.log("Error caught:", error);
        display.value = "Error";
    }
}

function adjustFontSize() {
    if (display.value.length > 8) {
        display.style.fontSize = "3rem"; // Adjust the size as needed
    } else {
        display.style.fontSize = "5rem";
    }
}
