
var generatePasswordBtn = document.getElementById("generate");

var specialCharStr = "~!@#$%^&*()_+-="; 
var uppercaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "0123456789";

var specialCharArr = specialCharStr.split(""); 
var upperCaseCharArr = uppercaseLetterStr.split("");
var lowerCaseCharArr = lowercaseLetterStr.split("");
var numbersArr = numberStr.split("");

function generatePassword() {

    var userChoiceLength = prompt("Enter Password Length: ");

    if (userChoiceLength < 8 || userChoiceLength > 128) { 
        alert("Password must be between 8 and 128 characters")
        return generatePassword()
    }

    var userChoiceSpChars = confirm("Special Characters?");

    var userChoiceUpperCase = confirm("Upper Case?");

    var userChoiceLowerCase = confirm("Lower Case?");

    var userChoiceNumbers = confirm("Numbers?");

    if (!userChoiceSpChars && !userChoiceUpperCase && !userChoiceLowerCase && !userChoiceNumbers) {
        alert("You must choose at least one set of characters")
        return generatePassword()
    }

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

    for (var i = 0; i < userChoiceLength; i++) {
        var index = Math.floor(Math.random() * userCharPool.length);

        myPassword = myPassword + userCharPool[index]
    }

    return myPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordTextEL = document.getElementById("password");
    passwordTextEL.value = password;

    return;
}

generatePasswordBtn.addEventListener("click", writePassword);