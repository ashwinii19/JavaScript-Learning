// // DOM Navigation = The process of navigating through the structure 
// //                  of an HTML document using JavaScript.

// // 1- .firstElementChild

const eleement = document.getElementById("fruits");
const firstChild = eleement.firstElementChild;
firstChild.style.backgroundColor = "yellow"

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
});



// // 2- .lastElementChild

const ellement = document.getElementById("fruits");
const lastChild = ellement.lastElementChild;
lastChild.style.backgroundColor = "yellow"

const ullElements = document.querySelectorAll("ul");
ullElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
});



// // 3- .nextElementSibling

const eelement = document.getElementById("orange");
const nextSibling = eelement.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";



// // 4- .previousElementSibling

const elementt = document.getElementById("orange");
const previousSibling = elementt.previousElementSibling;
previousSibling.style.backgroundColor = "yellow";



// // 5- .parentElement

const elements = document.getElementById("carrots");
const parent = elements.parentElement;
parent.style.backgroundColor = "yellow";



// // 6- .children

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});