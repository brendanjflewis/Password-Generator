// Assignment code here
var generateBtn = document.querySelector("#generate");

// Character variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%'()*+,-./:;<=>?@[^_`{|}~"

// Write password to the #password input
function enterpassword() {
  var password =generatepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

debugger;
// Password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// selected actions below are steps to create password
function generatePassword(){
  var result = "";
  // Prompt user for wanted password length
  var length = prompt("How characters would you like your password to contain?");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length <8 || length >128){
    alert("Please choose a number between 8 and 128!");
    return generatePassword()
  }

}
