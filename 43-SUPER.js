// // super = keyword is used in classes to call the constructor or 
// //         access the properties and methods of a parent (superclass) 
// //         this = this object
// //         super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        super.move(this.runSpeed);
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        super.move(this.swimSpeed)
        console.log(`This ${this.name} is swimming`)
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 3, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();
