function printReverseAlphabets() {
    // Loop through uppercase alphabets in reverse order from 'Z' to 'A'
    for (let i = 90; i >= 65; i--) {
        let uppercaseAlphabet = String.fromCharCode(i);
        let lowercaseAlphabet = String.fromCharCode(i + 32); // 'a' is 32 ASCII value greater than 'A'
        
        console.log(uppercaseAlphabet, lowercaseAlphabet);
    }
}

// Call the function to print alphabets in reverse order (uppercase and lowercase)
printReverseAlphabets();