// all the characters that can be put into a generated password
const characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  symbols: " !#$%&'*+,-./:;<=>?@^_`|~",
  numbers: "0123456789",
  
};

// function for generating password 
function generatePassword() {
  var charset = "";
  var length = window.prompt("How long would you like the password to be? (Keep it between 8 and 128.) ");
  var upperCase = window.confirm("Would you like to include Upper case letters in the password?");
  if(upperCase) {
    charset += characters.upper;
  };
  
  var lowerCase = window.confirm("Would you also like to include lower case letters in the password?");
  if(lowerCase) {
    charset += characters.lower;
  };

  var number = window.confirm("Would you also like to include Numbers in the password?");
  if(number) {
    charset += characters.numbers;
  };

  var symbol = window.confirm("Would you alkso like to include symbols in the password?");
  if(symbol) {
    charset += characters.symbols;
  };
};
  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
