//write javascript program to print the middle letter in the string bosco//
// Function to find the middle letter
function findMiddleLetter(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);
  
    // If the length is odd, return the middle letter
    // If the length is even, return the two middle letters
    return length % 2 === 0
      ? str[middleIndex - 1] + str[middleIndex]
      : str[middleIndex];
  }
  
  // String to analyze
  const word = "bosco";
  const middleLetter = findMiddleLetter(word);
  
  // Print the result
  console.log(`The middle letter(s) of "${word}" is: "${middleLetter}"`);
  