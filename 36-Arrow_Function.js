// // arrow function = a concise way to create function expressions 
// //                  good for simple functions that you use only once
// //                  (parameters) => some code

function hello(){ 
    console.log("hello!");
}

hello();


const helloo = function(){
    console.log("world!");
}

helloo();


const heello = (name, age) => {console.log(`Hello ${name}`),
                               console.log(`You are ${age} years old`)};

heello("Ashwini", 22);


// // ---------------------------------------------------------------------------

setTimeout(() => console.log("hello!"), 3000);



// // ---------------------------------------------------------------------------


const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));
console.log(square);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
