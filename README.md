# Secure Password Generator

## Description

Many employees have access to sensitive data. Due to that, they require a password that will meet critera that provides high security for that data. 

This employee had HTML and CSS files that provided the outline and look of how they would like thier password generator to appear. JavaScript was added so now the password generator is interactive. 

This applicaiton, Secure Password Generator, will generate a random password based on criteria that an employee has selected no matter what screen this is deployed is on. The HTML and CSS update dymanically based on the JavaScript that was added. The user intererface is clean, polished and responsive. 

## Secure Password Generator - Deployed Application

https://ross1jk.github.io/Secure-Password-Generator/ 


## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![password generator demo](./images/03-javascript-homework-demo.png)

## Folder and Document Structure and Content 
To follow industry best practices within the Secure Password Generator repository the folder structure has been updated.

  **index.html** 
  Stands on it own, outside of any folder. This was the code provided. 
  
  **README.md** 
  Stands on it own, outside of any folder.
  
  **images** 
  This folder contains all the password generator demo

  **scripts**
  This folder contains script.js. This javascript file contianed event listeners and functions to connect with the index.html document provided. 

  **styles** 
  This folder contains the style.css document. This was the code provided.


## JavaScript 

**Fuctions**

There are two fucntions, both of which were provided. One is to write the password to the screen. This was not altered at all. 

The other is to geneerate the password. This one contains all of my code created to make the Secure Password Generator interactive. 

**Varibles**

I used various varibles to call upon in my JavaScript code. I may have been able use less varibles, but these are what worked best for the code and made the Secure Password Generator function the best.

* Varibles Given: generateBtn, password, passwordText - all of these allowed my password to be written on the html document and were provided. 

* chooseLength: created to generate a prompt and store that prompts answer. This is used in my for loops and return statements later. 

* confirmLowercase: Allows the user to select if they want lowercase letters through a boolean statment. Used in my first set of contionals to set my completePassword String. 

* confirmUppercase: Allows the user to select if they want uppercase letters through a boolean statment. Used in my first set of contionals to set my completePassword String. 

* confirmNumeric: Allows the user to select if they want numeric characters through a boolean statment. Used in my first set of contionals to set my completePassword String. 

* confirmSpecial: Allows the user to select if they want special characters through a boolean statment. Used in my first set of contionals to set my completePassword String. 

* completePassword: Set as empty. Based on boolean statment answers, will generate a string, that will be used in a math radom fucntion in for loop. 

* lowercase: Contains all lowercase letter characters as a string. 

* uppercase: Contains all uppercase letter characters as a string. 

* numeric: Contains all numeric characters as a string. 

* special: Contains all special chacaters as a string. 

* newPassword: This is an empty string used in my for loop and in my returns. This string fills in my for loop and is returned at the end of my function. If contions are met, this will be displayed on index.html. 

**Prompts**

There is one prompt given. This is to ask the user of the Secure Password Generator how many characters they choose. Based on their resposne the password generator will log the chooseLength varible and run a for loop to get a new password. This prompt is also used in conditionals to alert errors based on length choice. 

**Booleans**

I have four boolean questions asking the user of the Secure Password Generator what types of character they want. Based on their answer, they will go through an if condition that will help set up a randomize character selection for the password. 

**Conditionals**

* I have four contionals that work off of my booleans - these contionals will add their matching string (ex: confirmLower case and lowercase) to the completePassword string which is needed for the for loop. If one of the choices is not selected nothing happens, it stays out of the completePassword varible.

* I have three varibles that help return my passsord. One looks at my length, so that if my lenght is not between 8 - 128 an error message is returend. One is so that if no characters are selected an error message is returned. The last is to return the new password if the other two are not true. 

**For Loop**

My for loop generates a new password by using my new completePassword string (generated through my condtionals based on booleans). Math Random is used on the string from completePassword varible. It is then added to my newPassword varible, which is set as an empty string and it equals my newPassword. Thiss will loop through as many characters are chosen from the first prompt.

**Returns**

I return three statements - all are accompanied with an alert.

* If the length selection is too short (determined through if) and tells the user to choose a new password 

* If no characters are selected (determeind through else if) and tells user to choose a new password 

* If all are met, it returns the new password. 

**Event Listeners**

This code was provided, and was not altered. When the button on index.html is clicked, the user will go through the questions asked about what they would like in thier password, and then the password will gnerate. 



  * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%


* Application loads with no errors.


- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
