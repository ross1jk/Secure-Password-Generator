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

**Varibles**

I used various varibles to call upon in my JavaScript code. I may have been able use less varibles, but these are what worked best for the code and made the Secure Password Generator function the best.

* Varibles Given: generateBtn, password, passwordText - all of these allowed my password to be written on the html document and were provided. 

* chooseLength:

* confirmLowercase:

* confirmUppercase:

* confirmNumeric:

* confirmSpecial: 

* completePassword: 

* lowercase:

* uppercase:

* numeric:

* special: 

* newPassword: 

**Prompts**

There is one prompt given. This is to ask the user of the Secure Password Generator how many characters they choose. Based on their resposne the password generator will log the chooseLength varible and run a for loop to get a new password. This prompt is also used in conditionals to alert errors based on length choice. 

**Booleans**

I have four boolean questions asking the user of the Secure Password Generator what types of character they want. Based on their answer, they will go through an if condition that will help set up a randomize character selection for the password. 

**Fuctions**


**Conditionals**


**For Loop**

My for loop generates a new password by using my new completePassword string (generated through my condtionals based on booleans). Math Random is used on the string from completePassword varible. It is then added to my newPassword varible, which is set as an empty string and it equals my newPassword. Thiss will loop through as many characters are chosen from the first prompt.

**Returns**

I return three statements - all are accompanied with an alert.

* If the length selection is too short (determined through if) and tells the user to choose a new password 

* If no characters are selected (determeind through else if) and tells user to choose a new password 

* If all are met, it returns the new password. 

**Event Listeners**



## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
