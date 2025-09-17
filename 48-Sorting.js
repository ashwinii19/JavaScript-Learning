// // sort() = method used to sort elements of an array in place.
// //          Sorts elements as strings in lexicographic order, not alphabetical
// //          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

// // ----------------------------------------------------------------

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b );
// numbers.sort((a, b) => b - a );

console.log(numbers);


// // ----------------------------------------------------------------

const people = [{name: "Ashwini", age: 22, gpa: 3.0},
                {name: "Durgesh", age: 22, gpa: 2.5},
                {name: "Dishita", age: 16, gpa: 1.5},
];

// people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);