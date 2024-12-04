// Function to process the number according to the rules
function processNumber(num) {
    let result = num;
  
    // Multiply by 5 if the number is a multiple of 2
    if (num % 2 === 0) {
      result *= 5;
      console.log(`The number ${num} is a multiple of 2. After multiplication by 5: ${result}`);
    }
  
    // Divide by 3 if the number is a multiple of 3
    if (result % 3 === 0) {
      result /= 3;
      console.log(`The number ${num} is a multiple of 3. After division by 3: ${result}`);
    }
  
    return result;
  }
  
  // Prompt the user for a starting number
  const inputNumber = parseInt(prompt("Enter a starting number (1 to 100):"));
  
  // Check if the input is valid
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
  } else {
    // Variable to hold the final results
    let results = [];
  
    // Loop through the first 100 natural numbers (1 to 100)
    for (let i = 1; i <= 100; i++) {
      let result = processNumber(i);
      results.push(result);
    }
  
    // Output the final results
    console.log("Processed numbers from 1 to 100:", results);
    alert("Check the console for the processed results.");
  }
  