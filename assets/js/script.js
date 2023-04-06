// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Creates the arrays from which the password generator draws characters.
var charArrUppers = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charArrLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charArrNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArrSpecials = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "\]", "\\", "_", "`", "{", "|", "}", "~"];

// The function that generates a password.
function generatePassword() {
  //Asks for the length of the password and ensures it's an integer between 8 and 128
  do {
    var length = parseInt(prompt("How many characters long do you want your password to be? (enter a number between 8 and 128)"))
    if ((length >= 8) && (length <= 128)) {
      break;
    }
    alert("Please pick a number between 8 and 128.");
    if (prompt === null) {
      return;
    }
    } while (true)

// Could add an escape valve here by adding "q to quit"

  // A series of four questions to determine which characters should be included in the password
  var wantsLowers = confirm ("Do you want your password to include at least one lowercase character?")
  console.log(wantsLowers);

  var wantsUppers = confirm ("Do you want your password to include at least one uppercase character?")
  console.log(wantsUppers);

  var wantsNumbers = confirm ("Do you want your password to include at least one number?")
  console.log(wantsNumbers);

  var wantsSpecials = confirm ("Do you want your password to include at least one special character?")
  console.log(wantsSpecials);

  // Returns an error message if the user doesn't select at least one set of characters.
  if (wantsLowers == false && wantsUppers == false && wantsNumbers == false && wantsSpecials == false) {
    alert("Please pick at least one category of characters.");
}

  // Creates the pool of potential password characters based on the responses to the questions above.
  var characterPool = [];
  if (wantsLowers) {
    characterPool = characterPool.concat(charArrLowers);
  }
  if (wantsUppers) {
    characterPool = characterPool.concat(charArrUppers);
  }
  if (wantsNumbers) {
    characterPool = characterPool.concat(charArrNumbers);
  }
  if (wantsSpecials) {
    characterPool = characterPool.concat(charArrSpecials);
  }
  //Creates an array to hold the characters generated.
  var passwordArray = new Array;

  //Ensures the password has at least one of each category selected by the user.
  if (wantsLowers) {
    var randomLowers = Math.floor(Math.random() * charArrLowers.length)
    passwordArray.push(charArrLowers[randomLowers]);
  }

  if (wantsUppers) {
    var randomUppers = Math.floor(Math.random() * charArrUppers.length)
    passwordArray.push(charArrUppers[randomUppers]);
  }

  if (wantsNumbers) {
    var randomNumbers = Math.floor(Math.random() * charArrNumbers.length)
    passwordArray.push(charArrNumbers[randomNumbers]);
  }

  if (wantsSpecials) {
    var randomSpecials = Math.floor(Math.random() * charArrSpecials.length)
    passwordArray.push(charArrSpecials[randomSpecials]);
  }

console.log(passwordArray);

  //Fills the rest of the array with random characters from the selected categories.
  for (var i = passwordArray.length; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    passwordArray.push(characterPool[randomIndex]);
  }

  console.log(passwordArray);
  console.log(characterPool);
  
  //Turns the array into a string with no separators.
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);