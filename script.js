// Assignment Code
var generateBtn = document.querySelector("#generate");

var LowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UpperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Number= ['1','2','3','4','5','6','7','8','9','0'];
var SpecialChar= ['!','@','#','$','%','^','&','*'];

function generatePassword() {
  var lengthPrompt = window.prompt( "How many characters do you want");

  lengthPrompt = parseInt(lengthPrompt);

  console.log(lengthPrompt);
  console.log(typeof lengthPrompt);

  if(lengthPrompt < 8 || lengthPrompt > 128 || !lengthPrompt){
    window.alert('please enter an appropriate number');
    return;
  }

  var useLowerCase = window.confirm('do you want to use lower-case letters');
  console.log({useLowerCase});

  var useUpperCase = window.confirm('do you want to use upper-case letters');
  console.log({useUpperCase});
  
  var useNumber = window.confirm('do you want to use numbers');
  console.log ({useNumber});

  var useSpecialChar = window.confirm('do you want to use special characters');
  console.log({useSpecialChar});

var LowerCaseList= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UpperCaseList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var NumberList= ['1','2','3','4','5','6','7','8','9','0'];
var SpecialCharList=['!','@','#','$','%','^','&','*'];

for (let i = e; i <   ; i++) {

let - Math.floor(Math.random( + List.length))
}

  // if (useLowerCase --- true) {

  };
  // else {
  //   window.alert('Must be between 8-126 characters')
  // }


// var passwordText=[UpperCase + LowerCase + Number 
// + SpecialChar] ;


//   var userInput=confirm('what is the password length') ;
//   if (isLengthPrompt) {
//      var userInput= confirm;
//   }
//  else {
//   return;
//   }
// var userInput=confirm('what is the password length') ;
// if ( isPasswordText){
//    var userInput= confirm;
//   }
//  else {
// return ;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);