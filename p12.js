// write a javascript prgm to print odd digit alphabets were the alphabet start from 1 
// Function to print odd-positioned alphabets
function printOddDigitAlphabets() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Alphabet string
    let oddAlphabets = [];

    // Loop through the alphabet and pick characters at odd positions (1, 3, 5, 7...)
    for (let i = 0; i < alphabet.length; i++) {
        if ((i + 1) % 2 !== 0) {  // Checking if the position is odd (1-based index)
            oddAlphabets.push(alphabet[i]);
        }
    }

    // Print the odd-positioned alphabets
    console.log(oddAlphabets.join(", "));
}

// Call the function to print the odd digit alphabets
printOddDigitAlphabets();
