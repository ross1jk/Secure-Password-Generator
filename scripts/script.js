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
//Character Types: lowercase upper case numeric special 

//will eventually use a while loop, so that when a user wants to stop, they can but only if the yare between 8 and 128 'alert must be between'

prompt("Choose a character type: lowercase, uppercase, numeric, or special");
  if ("lowercase") {
    prompt("select a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, or z");
  }

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
