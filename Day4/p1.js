// Write the javascript program to print square of a first 10 prime numbers
// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to calculate the square of the first 10 prime numbers
function printSquaresOfPrimes() {
    let count = 0; // To keep track of how many primes we have found
    let num = 2;   // Start checking from 2
    let squares = [];

    while (count < 10) {
        if (isPrime(num)) {
            squares.push(num ** 2); // Add square of the prime number to the list
            count++; // Increment the count of primes found
        }
        num++; // Check the next number
    }

    console.log("Squares of the first 10 prime numbers:", squares);
}

// Call the function
printSquaresOfPrimes();
