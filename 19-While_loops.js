// // While loop = repeat some code WHILE some condition is true

let username = "";

do{
    username = window.prompt("Enter Your username: ");
}while(username === "" || username === null)

console.log(`Hello ${username}`);



// // -----------------------------------------------------------------------

let loggedIn = false;
let userName;
let password;

while(!loggedIn){
    userName = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(userName === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}