// // rest paramters = (...rest) allow a function work with a variable 
// //                   number of argumenst by bundling them into an array

// //                  spread = expands an array into separate elements
// //                  rest = bundles separate elements into an array


function openFridge(...foods){
    console.log(foods);
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);


// // -----------------------------------------------------------------

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);





function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

const average = getAverage(1, 2, 3, 4, 5);

console.log(`Your total is $${average}`);






// // ----------------------------------------------------------------------

function combineString(...name){
    return name.join(" ");
}

let fullName = combineString("Ms.", "Ashwini", "Suresh", "Dagale");

console.log(fullName);