// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

  //var passwordChar = [];
  //for (var i = 8; 8<= N;) {
 //   passwordChar.push(i)
  //}
 
  //Varibles 
  var passwordChar = prompt("How many characters do you want your password to have (must be between 8 - 128)?"); 
  var confirmLowercase = confirm("Do you want lowercase letteres?");
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmNumeric = confirm("Do you want numeric characters?");
  var confirmSpecial = confirm("Do you want special charactesr?");

  lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  special = ["~", "%"]

  
 //Password Criteria through prompt:
 //How many characters do you want 8 - 128 charcters = length
   
    if (passwordChar <= 7) {
      alert("Your password length does not meet security requirements!");
    }
    else if (passwordChar >= 129) {
      alert("Your password length does not meet security requirements!");
    }
    else {
      console.log(passwordChar); 
    }
 
  //need conditional
 //Do you want lowercase
  
   if (confirmLowercase) {
    console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
   }
   //need conditional
   //Do you want uppercase
  
    if (confirmUppercase) {
      console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
   //need conditional
   //Do you want numeric 
  
    if (confirmNumeric) {
      console.log(numeric[Math.floor(Math.random() * numeric.length)]);
    }
    
    //need conditional
    //Do you want special 
  
    if (confirmSpecial) {
      console.log(special[Math.floor(Math.random() * special.length)]);
    }
  //need conditional 




  //Character Types: lowercase upper case numeric special 
  //var characters = [lowercase, uppercase, numeric]
 

  //will eventually use a while loop, so that when a user wants to stop, they can but only if the yare between 8 and 128 'alert must be between'

  //only giving me lowercase console.log is givng me random letters tho
 //prompt("Choose a character type: lowercase, uppercase, numeric, or special");
 
  //}
  //else if ("special") { come back to and figure out how to write these in a string
    //prompt("choose: !#$%&'(*+,-./:;<=>?@[\]^_`{|}~"); 
  //}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Will need when I am ready to generate final password outline works :) 
//generateBtn.addEventListener('click', function (event) {
   //alert('Element clicked through function!');
//});
