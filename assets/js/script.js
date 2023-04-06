// Assignment code here

/* 1) Prompts for password criteria
If "click," then first prompt.
- reject answer if less than 8 or more than 128
- store number in a variable (later, password must be equal to that number)



2) Prompts:
a) # of characters
b) must include lowercase?
- store Y or N, then instruction for if #password does not include lowercase, reject
c) " " uppercase?
d) " " special characters?
e) " " numbers?

3) After the password is written, need to split the letters into an array using .split
4) Then need to examine the password based on answers to questions above.

NEED TO DEFINE "generatePassword" function: XXXXX

*/


// THE CODE BELOW says: clicking the button generates and then writes the password. Two steps: 1) generate the password (see above) -- this is the generatePassword function?; then 2)
// test the password to make sure it passes the prompts


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charArrUppers = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charArrLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charArrNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArrSpecials = [" ", "!", "U+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "U+005D", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  let length = parseInt(prompt("How many characters long do you want your password to be? (enter a number between 8 and 128)"));
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Your password must be between 8 and 128 characters long. Please enter a number between 8 and 128."));
  }
  // NEED TO FIX THE ABOVE SO IT STAYS IN THE LOOP IF YOU DON'T ENTER A NUMBER

var promptLowers = prompt ("Do you want your password to include at least one lowercase character? (enter Y for yes or anything else for no)")
var wantsLowers = false;
if (promptLowers === "Y") {
   wantsLowers = true;
} 
console.log(wantsLowers);

var promptUppers = prompt ("Do you want your password to include at least one uppercase character? (enter Y for yes or anything else for no)")
var wantsUppers = false;
if (promptUppers === "Y") {
   wantsUppers = true;
} 
console.log(wantsUppers);

var promptNumbers = prompt ("Do you want your password to include at least one number? (enter Y for yes or anything else for no)")
var wantsNumbers = false;
if (promptNumbers === "Y") {
   wantsNumbers = true;
} 
console.log(wantsNumbers);

var promptSpecials = prompt ("Do you want your password to include at least one special character? (enter Y for yes or anything else for no)")
var wantsSpecials = false;
if (promptSpecials === "Y") {
   wantsSpecials = true;
} 
console.log(wantsSpecials);

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

var passwordArray = new Array(length);
let newLength = length - 1;
console.log(newLength);

passwordArray = [];
for (var i = 0; i < newLength; i++) {
  var randomIndex = Math.floor(Math.random() * characterPool.length);
  passwordArray.push(characterPool[randomIndex]);

// DO WE NEED TO MAKE IT LENGTH -1? OR JUST LENGTH?

}
console.log(passwordArray);

  console.log(characterPool);


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