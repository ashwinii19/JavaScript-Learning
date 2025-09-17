// Variables = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration      let x;
// 2. assignment       x = 100;

let age = 22;
console.log(typeof age);
console.log(`you are ${age} years old`);

let name = "Ashwini";
console.log(typeof name);
console.log(`Your name is ${name}`);

let online = true;
console.log(typeof online);
console.log(`is Online ${online}`);


let firstName = "Dagale";
let age1 = 22;
let isStudent = false;

document.getElementById(`p1`).textContent = `Your name is ${firstName}`;
document.getElementById(`p2`).textContent = `You are ${age1} years old`;
document.getElementById(`p3`).textContent = `Enrolled: ${isStudent}`;