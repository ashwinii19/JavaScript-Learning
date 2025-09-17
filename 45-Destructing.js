// // destructing = extract values from arrays and objects,
// //               then assign them to variables in a convenient way
// //               [] = to perform array destructing
// //               {} = to perfrom object destructing

// // Destructuring is a feature in JavaScript that allows you to 
// // unpack values from arrays or properties from objects into distinct variables in a concise way

// // --------------------------- EXAMPLE 1 -----------------------------------
// // SWAP THE VALUE OF TWO VARIABLE

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

console.log(`---------------------------------------------------------`);


// // --------------------------- EXAMPLE 2 -----------------------------------
// // SWAP 2 ELEMENT IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

console.log(`---------------------------------------------------------`);


// // --------------------------- EXAMPLE 3 -----------------------------------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "black", "white"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

console.log(`---------------------------------------------------------`);


// // --------------------------- EXAMPLE 4 -----------------------------------
// // EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Ashwini",
    lastName: "Dagale",
    age: 22,
    job: "Fry cook",
}

const person2 = {
    firstName: "Dishita",
    lastName: "Dagle",
    age: 16,
}

const {firstName, lastName, age, job="Unemployeed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(`---------------------------------------------------------`);


// // --------------------------- EXAMPLE 5 -----------------------------------
// // DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployeed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Ashwini",
    lastName: "Dagale",
    age: 22,
    job: "Fry cook",
}

const person4 = {
    firstName: "Dishita",
    lastName: "Dagle",
    age: 16,
}

displayPerson(person4);
