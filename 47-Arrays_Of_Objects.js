
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


console.log(fruits[0].name);
console.log(fruits[0].color);

fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits);

// fruits.pop();
// console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

// // ------------------ forEach() ------------------------

fruits.forEach(fruits => console.log(fruits.name));

// // -------------------- map() --------------------------------

const fruitName = fruits.map(fruit => fruit.name);
console.log(fruitName);

// // ------------------ filter() ------------------------------

const yellow = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellow);

// // ------------------- reduce() ---------------------------------

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);
console.log(maxFruit);
console.log(maxFruit.calories);