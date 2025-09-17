// // array = a variable like structure that can hold
// //         more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");   // to put elements at the end
fruits.pop();             // to remove last element
fruits.unshift("mango");   // to add elements at the start
fruits.shift();            // to remove elements from beginning

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
let index1 = fruits.indexOf("pineapple");

fruits.sort().reverse();

console.log(numOfFruits);
console.log(index);
console.log(index1);


// // -----------------------------------------------------------------

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// // -------------------  EHANCED FOR LOOP  -----------------------------------

for(let fruit of fruits){
    console.log(fruit);
}
