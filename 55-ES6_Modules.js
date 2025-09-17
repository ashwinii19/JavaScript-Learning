// // Es6 Module = An external file that contains reusable code 
// //              that can be imported into other Javascript files.
// //              write reusuable code for many different apps.
// //              Can contain variables, classes, functions ...and more
// //              introduced as part of ECMScript 2015 update


import{PI, getCircumference, getArea, getVolume} from `./55-mathUtil.js`;

console.log(PI);
const circumference = getCircumference(10);

const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);



