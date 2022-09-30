// Assignment code here

// var userNumber = []
// for (var i = 8; i<=128; i++) {
//   userNumber.push(i)
// }

// if (userNumber < 8){
//   alert("Password must be between 8-128 characters");
// }
// else if (userNumber > 128){
//   alert("Password must be between 8-128 characters");
// }

// var userNumber = prompt("Choose password length (Between 8-128 Characters)");

// var userNumber = restart; 


// var userNumber = prompt("Choose password length (Between 8-128 Characters)");
// if ((userNumber<8) || (userNumber>128)) {
//   alert("Password must be between 8-128 characters");
//   restart();
// }

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

// restart();

// var userNumber = ""

// if ((userNumber<8) || (userNumber>128)) {
//   var userNumber = prompt("Choose password length (Between 8-128 Characters)");
//       alert("Password must be between 8-128 characters");
      
//      }
//      else if ((userNumber>=8) || (userNumber<=128)) {
//       generatePassword(); 
//      }
    
``

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

// generateBtn.addEventListener("click", function promptUser(){
//   var userNumber = prompt("Choose Password Length (8-128 Characters)");
//   alert(userNumber)
// })

generateBtn.addEventListener("click", restart);


