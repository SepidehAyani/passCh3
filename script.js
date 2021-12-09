// Assignment Code
var generateBtn = document.querySelector("#generate");

//keys
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  specialCha: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

//create an array and put all these functions in the array
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
  function specialCha() {
    return keys.specialCha[randomSpecialCha];
  }
];

//create a random letter up to the length of the each key 
const randomUpperCase = Math.floor(Math.random() * keys.upperCase.length);
const randomLowerCase = Math.floor(Math.random() * keys.lowerCase.length);
const randomNum = Math.floor(Math.random() * keys.number.length);
const randomSpecialCha = Math.floor(Math.random() * keys.specialCha.length);
const randomKey = Math.floor(Math.random() * getKey.length);

const upperCaseCheck = document.getElementById("upperCase").checked;
const lowerCaseCheck = document.getElementById("lowerCase").checked;
const numberCheck = document.getElementById("number").checked;
const specialChaCheck = document.getElementById("specialCha").checked;

const length = document.getElementById("length");
const passwordText = document.querySelector("#password");
let password = "";

//generate password function
function generatePassword() {
  //check if at least one checkbox is checked
  if (upperCaseCheck + lowerCaseCheck + numberCheck + specialChaCheck === 0) {
    alert("You are missing the password criteria, please check at least one of the boxes");
    return;
  }
  while (length.value > password.length) {
    let keyToAdd = getKey[randomKey];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
    // console.log('this is password: ', password);
      passwordText.value = password;
}

//Write password to the #password input
function writePassword() {
  // console.log('write password function start');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log('this is the click function');