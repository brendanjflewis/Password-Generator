// Assignment code here

var generateBtn = document.querySelector("#generate");

// Character variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%'()*+,-./:;<=>?@[^_`{|}~"
//string for characters the user wants to use
var confirmedCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password =generatepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// i think this works
debugger;
// password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// selected actions below are steps to create password
function generatePassword(){
  //created result variable with indeterminate for random password
  var result = "";
  // prompt for user to choose password length
  var length = prompt("How characters would you like your password to contain?");
  // used if(isNaN(length)) to force an alert that tells user to input a number
  if(isNaN(length)){
    alert("You must input a number!");
    // brings user back to beginning
    return generatePassword()
  }
  // alerts user to choose number 8-128
  if(length<8||length>128){
    alert("Please choose a number between 8 and 128!");
    // brings user back to beginning
    return generatePassword()
  }

  // var with confirm action to force user to choose their characters
  var useUpper = confirm("Use upper case letters?");
  var useLower = confirm("Use lower case letters?");
  var useNumbers = confirm("Use numbers?");
  var useSpecial = confirm("Use special characters?");

  // if/else for each new var useCharacter
  if(useUpper){
    confirmedCharacters += upper
  } else {
  }

  if(useLower){
    confirmedCharacters += lower
  } else {
  }

  if(useNumbers){
    confirmedCharacters += numbers
   } else {
   }

  if(useSpecial){
    confirmedCharacters += special
  } else {
  }

  //if for not using at least one of the characters and prompting user with an alert
  if(!useUpper&&!useLower&&!useNumbers&&!useSpecial){
  alert("You must use at least one character to generate a password!")
  }


// set results to select used characters at random from to the user selected/desired character length
for (var i = 0; i < length; i++) {
  result += confirmedCharacters.charAt(Math.floor(Math.random() * confirmedCharacters.length));
}  
return result;

}