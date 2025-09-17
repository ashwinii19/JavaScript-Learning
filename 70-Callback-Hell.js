// callback hell
// situation in JS where callbacks are nested within other to teh degree where the code is different to read
// old pattern to handle asynchronous functions
// use promises + async/await to avoid callback hell

function task1(){
    setTimeout(() =>{
        console.log("Task 1 complete");
    }, 2000);
}

function task2(){
    setTimeout(() =>{
        console.log("Task 2 complete");
    }, 1000);
}

function task3(){
    setTimeout(() =>{
        console.log("Task 3 complete");
    }, 3000);
}

function task4(){
    setTimeout(() =>{
        console.log("Task 4 complete");
    }, 1500);
}

task1();
task2();
task3();
task4();
console.log("All tasks complete");


function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 complete");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

function task5(callback){
    setTimeout(() =>{
        console.log("Task 5 complete");
        callback();
    }, 2000);
}

task1();
task2();
task3();
task4();
console.log("All tasks complete");

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => console.log("All tasks completed"));
            });
        });
    });
});
