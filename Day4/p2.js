// Function to calculate yearly bonus
function calculateBonus(salary, yearsOfExperience, performanceScore) {
    let bonus = 0;

    // Rule 1: Bonus for employees with more than 5 years of experience and a performance score above 8
    if (yearsOfExperience > 5 && performanceScore > 8) {
        bonus = 0.2 * salary; // 20% of salary
    } 
    // Rule 2: Bonus for employees with more than 3 years but less than or equal to 5 years of experience and a performance score above 7
    else if (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) {
        bonus = 0.1 * salary; // 10% of salary
    }

    return bonus;
}

// Example usage
const employees = [
    { name: "Alice", salary: 50000, yearsOfExperience: 6, performanceScore: 9 },
    { name: "Bob", salary: 45000, yearsOfExperience: 4, performanceScore: 8 },
    { name: "Charlie", salary: 60000, yearsOfExperience: 3, performanceScore: 8 },
    { name: "Diana", salary: 75000, yearsOfExperience: 5, performanceScore: 7 },
    { name: "Eve", salary: 55000, yearsOfExperience: 5, performanceScore: 9 }
];

// Calculate and display bonuses for all employees
employees.forEach(employee => {
    const bonus = calculateBonus(employee.salary, employee.yearsOfExperience, employee.performanceScore);
    console.log(`Employee: ${employee.name}`);
    console.log(`Salary: $${employee.salary}`);
    console.log(`Years of Experience: ${employee.yearsOfExperience}`);
    console.log(`Performance Score: ${employee.performanceScore}`);
    console.log(`Yearly Bonus: $${bonus}`);
    console.log("-----------------------------");
});
