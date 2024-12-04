const prompt = require("prompt-sync")(); // Import prompt-sync

// Simple Calculator Function
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number: "));
  const operator = prompt("Enter an operator (+, -, *, /): ");
  const num2 = parseFloat(prompt("Enter the second number: "));

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operator";
  }

  console.log(`Result: ${result}`);
}

calculator(); // Run the calculator function
