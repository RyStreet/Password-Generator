// Assignment code here

// var userNumber = []
// for (var i = 8; i<=128; i++) {
//   userNumber.push(i)
// }
userNumber = 8

function generatePassword() {
var chars ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = userNumber;
var password = "";

for(var i=0; i< passwordLength; i++){
  var randomNumber = Math.floor(Math.random()*chars.length);
 
  password += chars.substring(randomNumber, randomNumber + 1);
}
document.getElementById('password').value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", function promptUser(){
  var userNumber = prompt("Choose Password Length (8-128 Characters)");
  alert(userNumber)
})


generateBtn.addEventListener("click", generatePassword);


