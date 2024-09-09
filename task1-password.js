function PasswordCheck(password) {
let LengthCheck = password.length >= 8;
let DigitCheck = /\d/.test(password);
let LowerCaseCheck = password !== password.toUpperCase();
let UpperCaseCheck = password !== password.toLowerCase();

if (LengthCheck && DigitCheck && LowerCaseCheck && UpperCaseCheck) {
    return "Strong";
} else {
    return "Weak";
}
}

let password = "PDWT2w2w";
console.log(PasswordCheck (password))