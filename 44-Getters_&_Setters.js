// //  getter = special method that makes a property readable
// //  setter = special method that makes a property writeable

// //  validate and modify a value when reading/writting a property

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else{
            console.log(`Width must be a positive number`);
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.log(`height must be a positive number`);
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${this._width * this._height.toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(`width : ${rectangle.width}`);
console.log(`height: ${rectangle.height}`);
console.log(`area: ${rectangle.area}`);


// // -------------------------------------------------------------------------

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newfirstName){
        if(typeof newfirstName === "string" && newfirstName.length > 0){
            this._firstName = newfirstName;
        }
        else{
            console.log("first name must be a non-empty string");
        }
    }

     set lastName(newlastName){
        if(typeof newlastName === "string" && newlastName.length > 0){
            this._lastName = newlastName;
        }
        else{
            console.log("last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log("age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Ashwini", "Dagale", 22);

console.log(`firstName : ${person.firstName}`);
console.log(`lastName: ${person.lastName}`);
console.log(`fullName: ${person.fullName}`);
console.log(`age: ${person.age}`);