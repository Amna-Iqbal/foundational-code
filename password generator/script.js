const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordOne = document.getElementById("password1");
let passwordTwo = document.getElementById("password2");
let copyText1 = document.querySelector("#password1");
let copyText2 = document.querySelector("#password2");
//Function to copy password to clipboard
function copyPassword1() {
    navigator.clipboard.writeText(copyText1.textContent);
    alert("Password copied to clipboard");
}
function copyPassword2() {
    navigator.clipboard.writeText(copyText2.textContent);
    alert("Password copied to clipboard");
}

//generate a random password
function generatePassword() {
    let password = "";
    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random];
    }
    return password;
}

function displayPassword() {
    passwordOne.textContent = generatePassword();
    passwordTwo.textContent = generatePassword();
}