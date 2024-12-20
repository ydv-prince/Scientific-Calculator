let calculation = "";

function updateCalculation(value) {
    calculation += value; // Append the button value to the calculation
    displayCalculation();
}

function clearCalculation() {
    calculation = ""; // Clear the calculation string
    displayCalculation();
}

function displayCalculation() {
    document.querySelector(".js-input").value = calculation; // Update the input field
}

function calculateResult() {
    try {
        calculation = eval(calculation); // Evaluate the mathematical expression
        displayCalculation();
    } catch (error) {
        calculation = "Error"; // Display error for invalid input
        displayCalculation();
    }
}

function calculateFunction(func) {
    let result;
    try {
        const input = parseFloat(calculation); // Parse the current calculation as a float
        switch (func) {
            case "sqrt":
                result = Math.sqrt(input); // Calculate square root
                break;
            case "square":
                result = Math.pow(input, 2); // Calculate square
                break;
            case "cube":
                result = Math.pow(input, 3); // Calculate cube
                break;
            case "power":
                const base = input;
                const exponent = prompt("Enter the exponent:"); // Ask for exponent
                result = Math.pow(base, parseFloat(exponent)); // Calculate power
                break;
            case "sin":
                result = Math.sin((input * Math.PI) / 180); // Calculate sine (degree)
                break;
            case "cos":
                result = Math.cos((input * Math.PI) / 180); // Calculate cosine (degree)
                break;
            case "tan":
                result = Math.tan((input * Math.PI) / 180); // Calculate tangent (degree)
                break;
            case "log":
                result = Math.log10(input); // Calculate base-10 logarithm
                break;
            case "ln":
                result = Math.log(input); // Calculate natural logarithm
                break;
            case "exp":
                result = Math.exp(input); // Calculate exponential (e^x)
                break;
            case "factorial":
                result = factorial(input); // Calculate factorial
                break;
            default:
                result = "Error"; // Default error message
        }
        calculation = result.toString(); // Convert result back to string
        displayCalculation();
    } catch (error) {
        calculation = "Error"; // Handle errors
        displayCalculation();
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    if (n < 0) return "Error"; // Factorial not defined for negative numbers
    return n * factorial(n - 1); // Recursive case
}

// Optional: Handle keydown for keyboard input
function handleKeyDown(event) {
    if (event.key === "Enter") {
        calculateResult(); // Calculate result on Enter key
    } else if (!isNaN(event.key) || ["+", "-", "*", "/", ".", " "].includes(event.key)) {
        updateCalculation(event.key); // Add valid key input to calculation
    } else if (event.key === "Backspace") {
        calculation = calculation.slice(0, -1); // Remove the last character
        displayCalculation();
    }
}
