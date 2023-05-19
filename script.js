// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalpassword;

}

function generatePassword() {
  // GOOGLE!!!

  // Create arrays for lowercase, uppercase, numbers, and special
  //special chars array
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Create password variable that is an empty string

  // Ask the user how many character should be in the password (between 8 and 128)
  var passwordLength= prompt("How many character should be in  the password");
  // Ask the user if they want lowercase characters
  var lowerCased= confirm("Would you like lowercase charc for your password");
  // - If they answer yes, add lowercase array to big options array
  var upperCase= confirm("Would you like uppercased charc for your password")
  // Ask the user if they want uppercase characters
  var numbers= confirm("Would you like numbers charc for your password")
  // Ask the user if they want numbers
  var specialC= confirm("Would you like special characters for your password")
  // Ask the user if they want special characters

  // Create a big options array, based on what the user wants. [a, b, c, 1, 2, 3]
  let password=[] 
  if (lowerCased) {
    password.push(lowerCasedChars[Math.
  floor(Math.random()*lowerCasedChars.length)]); 
  }
  if (upperCase) {
    password.push(upperCasedChars[Math.floor(Math.random()*upperCasedChars.length)]) ;
  }
  if (specialC) {
    password.push(specialChars[Math.floor(Math.random()*specialChars.length)]);
  }
  if (numbers) {
    password.push(numericChars[Math.floor(Math.random()*numericChars.length)]);
  }
console.log(password)
  // Based on the number the user gave us in the first question, create a password that matches the answer
  for (let i = 0; i < passwordLength-password.length; i++) {
    const element = lowerCasedChars[i];
    password.push(element)
    
  }
  return password.join("")
  // - FOR LOOP over the number that the user gave us
  //  -- Select a random value from the options array
  //  -- Add random value to the password variable (password += randomValue)
  // return the password variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
