// Assignment code here

// Generates the prompt asks user for PW character length

var userNumber;

function restart() {
  userNumber = prompt("Choose password length (Between 8-128 Characters)");
  if ((userNumber<8) || (userNumber>128)) {
    alert("Password must be between 8-128 characters");
   restart(); 
   }
   else if ((userNumber>=8) || (userNumber<=128)) {
    generatePassword(); 
   }
  
};

function generatePassword() {
  
  var num ="0123456789".split("")
  var alphalow = "abcdefghijklmnopqrstuvwxyz".split("")
  var alphahigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var special = "!@#$%^&*()".split("")

  var prePassword = [];
  var password = "";

if (confirm("Do you want Numbers?")) {
  prePassword = prePassword.concat(num)
}
if (confirm("Do you want Capitalized Letters?")) {
  prePassword = prePassword.concat(alphahigh)
}
if (confirm("Do you want Special Characters?")) {
  prePassword = prePassword.concat(special)
}
if (confirm("Do you want Lower Characters?")) {
  prePassword = prePassword.concat(alphalow)
}
// console.log(prePassword)
if (prePassword.length === 0){
  alert("You must choose a variable")
}else{

for(var i=0; i< userNumber; i++){
  var randomNumber = Math.floor(Math.random()*prePassword.length);
 
  password += prePassword[randomNumber]
}
}
document.getElementById('password').value = password;
// console.log(password)
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

generateBtn.addEventListener("click", restart);


