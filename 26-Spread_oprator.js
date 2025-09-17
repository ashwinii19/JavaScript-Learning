// // spread operator = ... allows an iterable such as an
// //                       array to string to be expanded
// //                       into seperate elements
// //                       (unpacks the elements)

// // --------------------- INTEGER -----------------------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);




// // --------------------- STRING -----------------------------

let userName = "Ashwini Dagale";
// let letters = [...userName];
let letters = [...userName].join("-");

console.log(letters);






// // -------------------------------------------

let fruits = ["apple", "orange", "banana"];
let newfruits = [...fruits];

console.log(newfruits);



let fruit = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];            // join two arrays

console.log(foods);