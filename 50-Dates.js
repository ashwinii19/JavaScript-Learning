// // Date objects = Objects that contain values that represent dates and times
// //                These data objects can be changed and formatted

// // Date(year, month, day, hour, mintue, second, ms)
const daate = new Date(2025, 8, 17, 2, 23);
const datee = new Date("2025-09-17T02:23:00Z");
const datte = new Date(0);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dat = date.getDate();
const day = date.getDay();
const hour = date.getHours();
const mintue = date.getMinutes();
const second = date.getSeconds();
const ms = date.getMilliseconds();


date.setFullYear(2024);


console.log(date);
console.log(year);
console.log(month);
console.log(dat);
console.log(day);
console.log(hour);
console.log(mintue);
console.log(second);
console.log(ms);


const date1 = new Date("2025-12-31");
const date2 = new Date("2026-01-01");

if(date2 > date1) {
    console.log("HAPPY NEW YEAR!");
}

