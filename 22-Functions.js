// // function = A section of reusable code.
// //            Declare code once, use it whenever you want.
// //            Call the function to execute that code.

// // ----------- PARAMETRIZED ---------------------------
function happyBirthday(userName, age){
    console.log("Happy Birthday to you!!");
    console.log("Happy Birthday to you!!");
    console.log(`Happy Birthday to ${userName}!!`);
    console.log("Happy Birthday to you!!");
    console.log(`You are ${age} years old!!`);
}

happyBirthday("Ashwini", 22);

// // ------------------------------------------------------
function addition(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiplication(x, y){
    return x * y;
}
function division(x, y){
    return x / y;
}
console.log(division(6, 2));

// // ------------------------------------------------------

function isEven(number){
   return number % 2 === 0 ? true : false;
}

console.log(isEven(2));


// // ---------------------------------------------------------

function isVlaid(email){
    return email.includes("@") ? email : false;

}

console.log(isVlaid("ash@gamil.com"));
console.log(isVlaid("ashdagalegamil.com"));