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

// asks user how many characters they want in the password
  var length = window.prompt("How long would you like the password to be? (Keep it between 8 and 128.) ");
  
// asks the user if they waNT TO INCLude uppercase letters
  var upperCase = window.prompt("Would you like to include Upper case letters in the password? Type yes or no.");
  if(upperCase = "yes") {
    charset += characters.upper;
  };
  
//asks if they want to include lowercase
  var lowerCase = window.prompt("Would you also like to include lower case letters in the password? Type yes or no.");
  if(lowerCase = "yes") {
    charset += characters.lower;
  };

// asks if they want to include numbers
  var number = window.prompt("Would you also like to include Numbers in the password? Type yes or no");
  if(number = "yes") {
    charset += characters.numbers;
  };

//asks if they want to include symbols
  var symbol = window.prompt("Would you alkso like to include symbols in the password? Type yes or no .");
  if(symbol = "yes") {
    charset += characters.symbols;
  }

  for(let i=0; i < length; i++) {
    var randomPass = Math.floor(Math.random() * charset)
 
    return randomPass

 };
  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
