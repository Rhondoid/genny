
var generateBtn = document.querySelector("#generate");
var passwordText = "password";

var lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  var lengthPrompt = window.prompt("How many characters do you want");

  lengthPrompt = parseInt(lengthPrompt);

  console.log(lengthPrompt);
  console.log(typeof lengthPrompt);

  if (lengthPrompt < 8 || lengthPrompt > 128 || !lengthPrompt) {
    window.alert("please enter an appropriate number");
    return;
  }

  var useLowerCase = window.confirm("do you want to use lower-case letters");
  console.log({ useLowerCase });

  var useUpperCase = window.confirm("do you want to use upper-case letters");
  console.log({ useUpperCase });

  var useNumber = window.confirm("do you want to use numbers");
  console.log({ useNumber });

  var useSpecialChar = window.confirm("do you want to use special characters");
  console.log({ useSpecialChar });

  var availableChars = [];
  if (useLowerCase) {
    availableChars = availableChars.concat(lowerCaseChars);
  }
  if (useUpperCase) {
    availableChars = availableChars.concat(upperCaseChars);
  }
  if (useNumber) {
    availableChars = availableChars.concat(numberChars);
  }
  if (useSpecialChar) {
    availableChars = availableChars.concat(specialChars);
  }
  console.log(availableChars);
  if (!useLowerCase && !useLowerCase && !useNumber && !useSpecialChar) {
    alert("Please use lowercase, uppercase, number, and special characters");
    return;
  }

  var newPassword = "";
  for (var i = 0; i < lengthPrompt; i++) {
    var randomChar =
      availableChars[Math.floor(Math.random() * availableChars.length - 1)];
    console.log(randomChar);
    newPassword += randomChar;
  }

  return newPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
