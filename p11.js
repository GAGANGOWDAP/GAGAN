// wtite ah javascrpit prgm to print 20 numbers were the first five numbers will be  mulptiple of 5 , next 5 will be multiple of 7 and next 5 numbers multiple of 10
// Function to print the numbers
printMultiples();
function printMultiples() {
    let numbers = [];
    
    // First 5 multiples of 5
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 5);
    }
    
    // Next 5 multiples of 7
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 7);
    }
    
    // Next 5 multiples of 10
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 10);
    }
    
    // Print the numbers
    console.log(numbers.join(", "));
}

// Call the function to print the numbers

