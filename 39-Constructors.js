// // constructor = special method for defining the 
// //               properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.dirve = () => console.log(`You drive the ${model}`)
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.dirve();

console.log("");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
