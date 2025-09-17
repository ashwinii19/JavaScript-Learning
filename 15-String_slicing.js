// // string slicing = creating a substring
// //                  from a portion of another string

// //                  string.slice(start, end)

// // --------------- NAME -----------------------
const fullName = "Ashwini Dagale";

// let firstName = fullName.slice(0, 8);
// let lastName = fullName.slice(8);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-2);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// // ---------------  EMAIL  -----------------------
const email = "ash@gmil.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);