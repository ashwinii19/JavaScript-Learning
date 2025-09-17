// // element selectors = Methods used to target and manipulate HTML elements 
// //                     They allow you to select one or multiple HTML elements 
// //                     from the DOM (Document Object Model) 

// // 1. document.getElementById()                  //ELEMENT OR NULL

const myheading = document.getElementById("my-heading");
myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";

console.log(myheading);



// // 2. document.getElementsByClassName()         // HTML COLLECTION

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "Orange";
fruits[2].style.backgroundColor = "yellow";

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// });

console.log(fruits);



// // 3. document.getElementsByTagName()          // HTMLCOLLECTION

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightGreen";
// }

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightGreen";
});

console.log(vegetable);



// // 4. document.querySelector()                // FIRST ELEMENT OR NULL       // only returns single element

const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";



// // 5. document.querySelectorAll()            // NODELIST

const foods = document.querySelectorAll(".fruits");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});

// foods[0].style.backgroundColor = "yellow";

