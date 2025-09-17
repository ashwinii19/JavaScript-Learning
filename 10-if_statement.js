// // IF STATEMENTS = if a condition is true, execute some code if not, do something else

// // ----------------  IF STATEMENT WITH INT --------------------------
// let age = 22;

if(age >= 18){
    console.log("You are able to vote");
}else{
    console.log("You must be 18+ to vote");
}


// // --------------    IF STATEMENT WITH BOOLEAN ----------------------
let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}else{
    console.log("You are not a student!");
}


// // ----------------- IF STATEMENT WITH TWO VARIABLES -------------------
// let age = 22;
let hasLicense = true;

if(age >= 18){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("you have your License");
    }
    else{
        console.log("you do not have your License yet!")
    }
}
else{
    console.log("You must be 18+ to have a License");
}

// ----------------- ELSE-IF STATEMENT --------------------
// let age = 22;

if(age >= 100){
    console.log("You are 100 old to vote");
}
else if(age == 0){
    console.log("You can't vote. You were just born.");
}
else if(age >= 18){
    console.log("You are able to vote");
}
else if(age < 0){
    console.log("Your age can't be below 0");
} 
else{
    console.log("You must be 18+ to vote");
}


// // ------------------ IF STATEMENT WITH HTML --------------------------
const myAge = document.getElementById(`myAge`);
const mySubmit = document.getElementById(`mySubmit`);
const resultElement = document.getElementById(`resultElement`);

let age;

mySubmit.onclick = function(){
    age = myAge.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = "You are 100 old to vote";
    }
    else if(age == 0){
        resultElement.textContent = "You can't vote. You were just born.";
    }
    else if(age >= 18){
        resultElement.textContent = "You are able to vote";
    }
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0";
    } 
    else{
        resultElement.textContent = "You must be 18+ to vote";
    }
}