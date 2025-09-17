// // nested objects = Objects inside of other objects.
// //                  Allows you to represent more complex data structures
// //                  Child object is enclosed by a Parent Object

// //                  Person{Address{}, ContactInfo{}}
// //                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const Person = {
    fullName: "Ashwini Dagale",
    age: 22,
    isStudent: false,
    hobbies: ["Karate", "jellyfishing", "cooking"],
    address: {
        street : "124 Conch st.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(Person.fullName);
console.log(Person.age);
console.log(Person.isStudent);
console.log(Person.hobbies);
console.log(Person.address);
console.log(Person.address.city);


for(const property in Person.address){
    console.log(Person.address[property]);
}


// // -------------------------------------------------------------------------------

class Personn{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.city = city;
        this.street = street;
        this.country = country;
    }
}

const person1 = new Personn("Ashwini", 22, "Bikini Bottom", 
                                           "124 Conch st.", 
                                           "Int. Water");

console.log(person1.address);
console.log(person1.address.street);