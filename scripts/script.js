// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
   
 //all this needs to go into generate password besides varibles 
 function generatePassword() {
  //Varibles 
  var completePassword = "";
  var chooseLength = prompt("How many characters do you want your password to have (must be between 8 - 128)?"); 
  var confirmLowercase = confirm("Do you want lowercase letters?");
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmNumeric = confirm("Do you want numeric characters?");
  var confirmSpecial = confirm("Do you want special charactesr?");

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var special = ["~", "%", "!", "}", "{", "|", "'", "`", "_", "^", "]", "[", "/", ":", ";", "=", ">", "<", "?", "@", ".", "-", ",", "+", "*", "#", "$", "&", "("]
 

   if (chooseLength < 8 || chooseLength > 128) {
     alert("Your password length does not meet security requirements!");
    }
    
   //Password Criteria through prompt:
     var i;  
     for(i = 0; i < chooseLength; i++) {
       if (confirmLowercase) {
         completePassword = completePassword + lowercase[Math.floor(Math.random() * lowercase.length)]; 
        }

        if (confirmUppercase) {
          completePassword = completePassword + uppercase[Math.floor(Math.random() * uppercase.length)];
          }

        if (confirmNumeric) {
          completePassword = completePassword + numeric[Math.floor(Math.random() * numeric.length)];
         }

         if (confirmSpecial) {
          completePassword = completePassword + special[Math.floor(Math.random() * special.length)];
         }
        }
      alert("Your new password is: " + completePassword); 
      console.log(completePassword);
      return completePassword;
  }    

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 

 
    