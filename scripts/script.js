// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }
   //all this needs to go into generate password besides varibles 
 
  //Varibles 
  var completePassword = "";
  var passwordLength = 0;
  var chooseLength = prompt("How many characters do you want your password to have (must be between 8 - 128)?"); 
  var confirmLowercase = confirm("Do you want lowercase letteres?");
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmNumeric = confirm("Do you want numeric characters?");
  var confirmSpecial = confirm("Do you want special charactesr?");

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var special = ["~", "%"]


  // function 
  function reWriteStats() {
    console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
    console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
    console.log(numeric[Math.floor(Math.random() * numeric.length)]);
    console.log(special[Math.floor(Math.random() * special.length)]);
  }
    //Password Lenght Choices:
    if (chooseLength < 8 && chooseLength > 128) {
      alert("Your password length does not meet security requirements!");
    }
    else {
      chooseLength = passwordLength
    } 

   // "drewjason" + "cat" -- want to do contintinously while adding a letter 
  completePassword = lowercase[Math.floor(Math.random() * lowercase.length)] + uppercase[Math.floor(Math.random() * uppercase.length)] + numeric[Math.floor(Math.random() * numeric.length)] + special[Math.floor(Math.random() * special.length)];
  console.log(completePassword);

   //Password Criteria through prompt:
      //can use an array to randomize this
      //for or while loop to complete 
        if (confirmLowercase) {
          lowercase = reWriteStats();
        }
        else if (confirmUppercase) {
          uppecase = reWriteStats();
        }
        else if (confirmNumeric) {
          numeric = reWriteStats();
        }
        else if (confirmSpecial) {
          speical = reWriteStats();
        }
     // }

    //Character Lengths
     
    //add all together 
   
    //document.getElementById

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Will need when I am ready to generate final password outline works :) 
//generateBtn.addEventListener('click', function (event) {
   //alert('Element clicked through function!');
//});
