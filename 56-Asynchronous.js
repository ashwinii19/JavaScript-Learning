// // synchronous = Executes line by line consecutively in a sequential manner
// //               code that waits for an operation to complete.

console.log("Starting task 1");

function task1() {
  console.log("Task 1 is complete!");
}

task1();  // Task 1 ko wait karke execute karte hain

console.log("Starting task 2");

function task2() {
  // Simulate a time-consuming task
  for (let i = 0; i < 1000000000; i++) {}  // Ye ek heavy loop hai
  console.log("Task 2 is complete!");
}

task2();  // Task 2 ko finish hone ka wait karenge

console.log("Both tasks are done!");


// // asynchronous = Allow multiple operations to be performed concurrently without waiting 
// //                Doesn't block the execution flow and allows the program to continue 
// //                (I/O operations, network requests, fetching data) 
// //                Handled with: Callbacks, Promises, Async/Await


console.log("Starting task 1");

function task1() {
  console.log("Task 1 is complete!");
}

task1();  // Task 1 execute ho raha hai

console.log("Starting task 2");

function task2() {
  setTimeout(() => {
    console.log("Task 2 is complete! (after 2 seconds)");
  }, 2000);  // Task 2 ko 2 second ka wait hai
}

task2();  // Task 2 ko background mein chalne do

console.log("Both tasks are done!");


// // -------------------------------------------------------------------------------------------

function func1(callback){
    setTimeout(() => {console.log("Task 1");
                    callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);