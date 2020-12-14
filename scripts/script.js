// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 
function generatePassword() {
  //Varibles 
  var chooseLength = prompt("How many characters do you want your password to have (must be between 8 - 128)?"); 
  var confirmLowercase = confirm("Do you want lowercase letters?");
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmNumeric = confirm("Do you want numeric characters?");
  var confirmSpecial = confirm("Do you want special characters?");
  var completePassword = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "~%!}{|'`_^][/:;=><?@.-+*#$&(";
  var newPassword = ""; 
   //Password Criteria through prompt:
     
       if (confirmLowercase) {
         completePassword = completePassword + lowercase; 
        }
        if (confirmUppercase) {
          completePassword = completePassword + uppercase;
        }
        if (confirmNumeric) {
          completePassword = completePassword + numeric;
        }
        if (confirmSpecial) {
          completePassword = completePassword + special; 
        }
        
        var i;  
        for(i = 0; i < chooseLength; i++) {
         newPassword = newPassword + completePassword[Math.floor(Math.random() * completePassword.length)]; 
        }
        
        if (chooseLength < 8 || chooseLength > 128) {
          alert("Your password length does not meet security requirements!");
          return "Your length needs to be between 8 - 128 characters. Generate a new password.";
        }
        else if (completePassword == "") {
          alert("Your password character selection does not meet security requirements!");
          return "Please select at least one character type. Generate a new password.";
        }
        else {
        alert("Your new password is: " + newPassword); 
        return newPassword;
        }
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 