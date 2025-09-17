// // constant = a variable that cant be changed

// // ------------------- console -----------------------------------
// const PI =3.14159;
// let radius;
// let circumference;

// radius = window.prompt('Enter a radius of a circle');
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);



// // ----------------------- HTML ------------------------------------
const PI =3.14159;
let radius;
let circumference;

document.getElementById(`mySubmit`).onclick = function(){
    radius = document.getElementById(`myRadius`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference;
}