// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Password Criteria through prompt:
//8 - 128 charcters = length

//var length

//Character Types: lowercase upper case numeric special 
//var characters = [lowercase, uppercase, numeric]
  lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  //will eventually use a while loop, so that when a user wants to stop, they can but only if the yare between 8 and 128 'alert must be between'

//only giving me lowercase console.log is givng me random letters tho
 prompt("Choose a character type: lowercase, uppercase, numeric, or special");
  if ("lowercase") {
    console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
  }
  else if ("uppercase") {
    console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
  }
  else if ("numeric") {
    console.log(numeric[Math.floor(Math.random() * numeric.length)]);
  }
  //else if ("special") { come back to and figure out how to write these in a string
    //prompt("choose: !#$%&'(*+,-./:;<=>?@[\]^_`{|}~"); 
  //}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
