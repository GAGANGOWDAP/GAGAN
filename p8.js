const prompt = require("prompt-sync")(); // Import prompt-sync

// Function to check exam eligibility
function checkExamEligibility(attendedClasses, totalClasses) {
  const attendancePercentage = (attendedClasses / totalClasses) * 100;

  if (attendancePercentage >= 75) {
    return `Eligible for the semester exam. Attendance: ${attendancePercentage.toFixed(2)}%`;
  } else {
    return `Not eligible for the semester exam. Attendance: ${attendancePercentage.toFixed(2)}%`;
  }
}

// Prompt for user input
const attendedClasses = parseInt(prompt("Enter the number of classes attended: "));
const totalClasses = parseInt(prompt("Enter the total number of classes held: "));

// Validate inputs
if (
  isNaN(attendedClasses) ||
  isNaN(totalClasses) ||
  attendedClasses < 0 ||
  totalClasses <= 0 ||
  attendedClasses > totalClasses
) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Check eligibility
  const result = checkExamEligibility(attendedClasses, totalClasses);
  console.log(result);
}
