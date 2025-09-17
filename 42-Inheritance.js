// // Inheritance = allows a new class to inherit properties and methods
// //               from an existing class (parent -> child)
// //               helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();