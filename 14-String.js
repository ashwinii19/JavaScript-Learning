// string methods = allow you to manipulate and work with text (strings)

let username = "Ashw ini";

console.log(username.charAt(2));

console.log(username.lastIndexOf("i"));

console.log(username.length);

console.log(username.trim());

console.log(username.toUpperCase());

console.log(username.repeat(3));

let result = username.startsWith(" ");
// let result = username.includes(" ");
console.log(result);

if(result){
    console.log("Your username can't begin with ' '");
}
else {
    console.log(username);
}

// // -----------------------------------------------------------
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);
