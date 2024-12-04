// write a javascript program to reverse the alphabets by using askey values
function printReverseAlphabets() {
    // Loop through the alphabet in reverse order from 'Z' to 'A'
    for (let i = 90; i >= 65; i--) {
        // Convert the ASCII value to the corresponding alphabet
        let alphabet = String.fromCharCode(i);
        console.log(alphabet);
    }
}

// Call the function to print alphabets in reverse order
printReverseAlphabets();