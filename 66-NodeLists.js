// // NodeList = Static collection of HTML elements by (id, class, element)
// //            Can be created by using querySelectorAll() 
// //            Similar to an array, but no (map, filter, reduce) 
// //            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

//Add html/css properties
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😂"
});

// //  ------------------------------------ click -------------------------
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.background = "tomato";
    });
});


// // -------------------------------------- mouse -----------------------------------


buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsla(199, 83%, 16%, 1.00)";
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(199, 100%, 62%)";
    });
});


// // ------------------------------- add an element -----------------------------------
const newButton = document.createElement("button") //step one create element
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);


// // -------------------------------remove an element -------------------------------
buttons.forEach(button => {
    button.addEventListener("click",event =>{
        event.target.remove();
    });
});