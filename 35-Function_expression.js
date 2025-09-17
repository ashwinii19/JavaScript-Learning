// // function declaration = define a reusable block of code that performs a specific task

function hello(){
    console.log("Hello");
}

hello();



let numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}



// // function expression = a way to define functions as values or variables

// // uses in 
// // 1. Callbacks in asynchronous operation   
// // 2. Higher-Order Functions    
// // 3. Closures    
// // 4. Event Listeners

const helloo = function(){
    console.log("Helloo");
}

helloo();



setTimeout(function(){
    console.log("World");
}, 3000);





let number = [1, 2, 3, 4, 5];

const squaree = numbers.map(function(element){
    return Math.pow(element, 2);
});


console.log(squaree);

const evenNums = number.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNums);


const total = number.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);
