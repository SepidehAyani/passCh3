// Assignment Code
var generateBtn = document.querySelector("#generate");

//set the password criteria
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  specialCha: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

//Math.floor() function returns the largest integer less than or equal to a given number
//create a random letter up to the length of the each key 
const randomUpperCase = Math.floor(Math.random() * keys.upperCase.length);
const randomLowerCase = Math.floor(Math.random() * keys.lowerCase.length);
const randomNum = Math.floor(Math.random() * keys.number.length);
const randomSpecialCha = Math.floor(Math.random() * keys.specialCha.length);
const randomKey = Math.floor(Math.random() * getKey.length);

/*create an array and put all these functions in the array
so that we can randomly call a function to randomly pick a char for us*/
const getKey = [
  function upperCase() {
    return keys.upperCase[randomUpperCase];
  },
  function lowerCase() {
    return keys.lowerCase[randomLowerCase];
  },
  function number() {
    return keys.number[randomNum];
  },
  function symbol() {
    return keys.specialCha[randomSpecialCha];
  }
];

// console.log('random uppercase letter: ', keys.upperCase[randomUpperCase]);
// console.log('random lowercase letter: ', keys.lowerCase[randomLowerCase]);
// console.log('random number: ', keys.number[randomNum]);
// console.log('random special character: ', keys.specialCha[randomSpecialCha])

function generatePassword() {
  //check if at least one checkbox is checked
  const upperCaseCheck = document.getElementById("upperCase").checked;
  const lowerCaseCheck = document.getElementById("lowerCase").checked;
  const numberCheck = document.getElementById("number").checked;
  const specialChaCheck = document.getElementById("specialCha").checked;
  if (upperCaseCheck + lowerCaseCheck + numberCheck + specialChaCheck === 0) {
    alert("You are missing the password criteria, please check at least one of the boxes");
    return;
  }

  // const passwordHolder = document.getElementById("passwordHolder");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[randomKey];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }

  //Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

}