// // object = A collection of related properties and/or methods 
// //          can represent real worl objects (people, products, places)
// //          object = {key:value, 
// //                    function()}


const person1 = {
    firstName: "Ashwini",
    lastName: "Dagale",
    age: 22,
    isEmployed: true,
    sayHello: () => console.log("Hi! I am Ashwini"),
    eat: () => console.log("I am eating a chicken"),
}

const person2 = {
    firstName: "Dishita",
    lastName: "Dagle",
    age: 16,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I am Dishita")},
}


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log("");

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();