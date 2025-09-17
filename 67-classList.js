// // classList = Element property in JS used to interact with an element's list of classes (CSS classes)
// //             allows you to make reusable classes for many elements across your webpages

// add()
// remove()
// toggle(Remove if present, add if not)
// replace(oldClass, newClass)
// contains() 

const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.classList.add("hover");

myButton.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");
});

myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
});


myButton.classList.add("enabled");

myButton.addEventListener("click", event =>{
    event.target.classList.replace("enabled", "disabled");
});

myButton.addEventListener("click", event =>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "emoji";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});

const myH1 = document.getAnimations("myH1");
myH1.classList.add("enabled");

myH1.addEventListener("click", event =>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "emoji";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.classList.replace("enabled", "disabled");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "emoji";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});


