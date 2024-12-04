// Function to categorize students based on their marks
function categorizeStudent(score) {
    if (score >= 90) {
        return "A+";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B+";
    } else if (score >= 60) {
        return "B";
    } else {
        return "C";
    }
}

// Taking input from the user (using prompt-sync in Node.js for input)
const prompt = require('prompt-sync')();  // Make sure prompt-sync is installed

// Asking the user for the student's score
let studentScore = parseFloat(prompt("Enter the student's score (0-100): "));

// Validate the score
if (isNaN(studentScore) || studentScore < 0 || studentScore > 100) {
    console.log("Please enter a valid score between 0 and 100.");
} else {
    // Categorize the student based on their score
    let category = categorizeStudent(studentScore);

    // Output the result
    console.log( `The student is categorized as: ${category}`);
}