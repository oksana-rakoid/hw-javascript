function PasswordCheck(password) {
let LengthCheck = password.length >= 8;
let DigitCheck = /\d/.test(password);
let LowerCaseCheck = /[a-z]/.test(password);
let UpperCase = /[A-Z]/.test(password);

if (LengthCheck && DigitCheck && LowerCaseCheck && UpperCase) {
    return "Strong";
} else {
    return "Weak"
}
}

let password = "PDWT2d2d";
console.log(PasswordCheck (password))