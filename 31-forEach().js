// //  foreach() = method used to iterate over the elements 
// //              of an array and apply a speified function (callback)
// //              to each element 

// //              array.forEach(callback)
// //              elements, index, array are provided


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}

// // --------------------------------------------------------------------

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(captialize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function captialize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}