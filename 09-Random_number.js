// // Random Number Generator

// // ---------------- console --------------------
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);


// // ------------------ HTML -------------------------------
const myButton = document.getElementById(`myButton`);
const myLabel = document.getElementById(`myLabel`);

const min = 0;
const max = 9;

let randomNum;

myButton.onclick = function(){
    randomNum =  Math.floor(Math.random() * (max - min)) + min;
    myLabel.textContent = randomNum;
}