// Assignment Code
var generateBtn = document.querySelector("#generate");

//keys
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  specialCha: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

//create an array and put all the functions in the array to go through each array to randomly pick a char
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function specialCha() {
    return keys.specialCha[Math.floor(Math.random() * keys.specialCha.length)];
  }
];

// Generate password function
function generatePassword() {

  //const for each check
  const upperCaseCheck = document.getElementById("upperCase").checked;
  const lowerCaseCheck = document.getElementById("lowerCase").checked;
  const numberCheck = document.getElementById("number").checked;
  const specialChaCheck = document.getElementById("specialCha").checked;

  const length = document.getElementById("length");
  const passwordText = document.querySelector("#password");
  let password = "";


  // Check if at least one criteria is checked
  if (upperCaseCheck + lowerCaseCheck + numberCheck + specialChaCheck === 0) {
    alert("You are missing the password criteria, please check at least one of the boxes");
    return;
  }
  while (length.value >= password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordText.value = password;
}

// Write password to the #password input
function writePassword() {
  generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
