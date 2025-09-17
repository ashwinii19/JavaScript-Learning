// How to accept user input
//  1. EASY WAY = window prompt
//  2. PROFESSIONAL WAY = HTML textbox

// // ---------------- Console ----------------
let userName;
userName = window.prompt(`What's your name?`);
console.log(userName);


// // ----------------- HTML -------------------
let username;
document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById('myH1').textContent = `Hello ${username}`;
}