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
  let length = parseInt(prompt("How many characters long do you want your password to be? (enter a number between 8 and 128)"));
  while (!(length >= 8) || !(length <= 128)) {
    length = parseInt(prompt("Your password must be between 8 and 128 characters long. Please enter a number between 8 and 128."));
  }

  // A series of four questions to determine which characters should be included in the password
  var promptLowers = prompt ("Do you want your password to include at least one lowercase character? (Enter yes or no.)")
  var wantsLowers = false;
  if (promptLowers === "Y" || promptLowers === "yes" || promptLowers === "y" || promptLowers === "Yes" || promptLowers === "YES") {
    wantsLowers = true;
  } 
  console.log(wantsLowers);

  var promptUppers = prompt ("Do you want your password to include at least one uppercase character? (Enter yes or no.)")
  var wantsUppers = false;
  if (promptUppers === "Y" || promptUppers === "yes" || promptUppers === "y" || promptUppers === "Yes" || promptUppers === "YES") {
    wantsUppers = true;
  } 
  console.log(wantsUppers);

  var promptNumbers = prompt ("Do you want your password to include at least one number? (Enter yes or no.)")
  var wantsNumbers = false;
  if (promptNumbers === "Y" || promptNumbers === "yes" || promptNumbers === "y" || promptNumbers === "Yes" || promptNumbers === "YES") {
    wantsNumbers = true;
  } 
  console.log(wantsNumbers);

  var promptSpecials = prompt ("Do you want your password to include at least one special character? (Enter yes or no.)")
  var wantsSpecials = false;
  if (promptSpecials === "Y" || promptSpecials === "yes" || promptSpecials === "y" || promptSpecials === "Yes" || promptSpecials === "YES") {
    wantsSpecials = true;
  } 
  console.log(wantsSpecials);

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
  var passwordArray = new Array(length);

  //Fills the array with characters.
  passwordArray = [];
  for (var i = 0; i < length; i++) {
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