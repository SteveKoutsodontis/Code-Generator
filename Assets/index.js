// Attaching the Javascript to the HTML.
var generatePasswordBtn = document.getElementById("generate");
// Special Character , Letters and Number Strings.
var specialCharStr = "~!@#$%^&*()_+-="; 
var uppercaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "0123456789";
//Converting arrays to strings and then splitting them.
var specialCharArr = specialCharStr.split(""); 
var upperCaseCharArr = uppercaseLetterStr.split("");
var lowerCaseCharArr = lowercaseLetterStr.split("");
var numbersArr = numberStr.split("");
// Main Function.
function generatePassword() {
    // User Prompt.
    var userChoiceLength = prompt("Enter Password Length: ");
    // Alert if user to reach requirements of the choice.
    if (userChoiceLength < 8 || userChoiceLength > 128) { 
        alert("Password must be between 8 and 128 characters")
        return generatePassword()
    }
    // User Confirmation.
    var userChoiceSpChars = confirm("Special Characters?");

    var userChoiceUpperCase = confirm("Upper Case?");

    var userChoiceLowerCase = confirm("Lower Case?");

    var userChoiceNumbers = confirm("Numbers?");
    // Alert of user does not choose any sets of characters.
    if (!userChoiceSpChars && !userChoiceUpperCase && !userChoiceLowerCase && !userChoiceNumbers) {
        alert("You must choose at least one set of characters")
        return generatePassword()
    }
    // User Pool, Each are used to pull a character from each set.
    var userCharPool = [];

    if (userChoiceSpChars) {
        userCharPool = userCharPool.concat(specialCharArr);
    }

    if (userChoiceUpperCase) {
        userCharPool = userCharPool.concat(upperCaseCharArr);
    }

    if (userChoiceLowerCase) {
        userCharPool = userCharPool.concat(lowerCaseCharArr);
    }

    if (userChoiceNumbers) {
        userCharPool = userCharPool.concat(numbersArr);
    }

    var myPassword = ""
    // Randomly generating the password one letter or number or special character at a time until the length is completed.
    for (var i = 0; i < userChoiceLength; i++) {
        var index = Math.floor(Math.random() * userCharPool.length);

        myPassword = myPassword + userCharPool[index]
    }

    return myPassword;
}
// Function to write in the designated Generate password location.
function writePassword() {
    var password = generatePassword();
    var passwordTextEL = document.getElementById("password");
    passwordTextEL.value = password;

    return;
}
// Click function to generate password.
generatePasswordBtn.addEventListener("click", writePassword);
