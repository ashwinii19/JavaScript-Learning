// JSON
// javascript object notation
// data interchange format
// used for exchanging data between a server and a web application
// json files { key:value} or {value1, value2, value3}
// JSON.stringify() = converts a JS obejct to JSON string
// JSON.parse() = converts a JSON string to as JS object

const names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

const person = `{
    "name" : "Spongebob",
    "age" : 30,
    "isEmployed" : true,
    "hobbies" : ["dance", "sleep", "cook"]
}`;

const people =` [
{
    "name" : "Spongebob",
    "age" : 30,
    "isEmployed" : true,
},
{
    "name" : "Patrick",
    "age" : 34,
    "isEmployed" : false,
},
{
    "name" : "Squidward",
    "age" : 50,
    "isEmployed" : true,
},
{
    "name" : "Sandy",
    "age" : 27,
    "isEmployed" : true,
},
]`;

const jsonString = JSON.stringify(names);
console.log(jsonString);

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const jsonString = JSON.stringify(person);
// console.log(jsonString);


const parsedData = JSON.parse(person);
console.log(parsedData);


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))