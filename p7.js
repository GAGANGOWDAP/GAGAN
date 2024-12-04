// Function to find the length of a string without using length property
function findStringLengthWithoutLength(str) {
    let count = 0;
    for (let char of str) {
      count++;
    }
    return count;
  }
  
  // String to analyze
  const word = "gagan";
  const length = findStringLengthWithoutLength(word);
  
  // Print the result
  console.log(`The length of the string "${word}" is: ${length}`);
  