const MAX_DIGITS = 15; // Set your desired max limit here

function appendToDisplay(input) {
    if (display.value.length >= MAX_DIGITS) {
        return; // Exit if the max limit is reached
    }

    // Ensures that the use doesnt enter multiple operators in one time.
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', '/', '.'];

    // Check if the last character is an operator
    if (operators.includes(lastChar) && operators.includes(input)) {
        return;
    }
    display.value += input;
    adjustFontSize(); // Call the function to adjust the font size
}

function clearDisplay() {
    display.value = "";
    adjustFontSize(); // Reset font size when display is cleared
}

function calculate() {
    try {
        display.value = eval(display.value);
        adjustFontSize(); // Call the function to adjust the font size
    } catch (error) {
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
