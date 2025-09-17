// // variable scope = where a variable is recognized 
// //                  and accessible (local & global)

let x = 2;                      // global scope

function function1(){
    let x = 1;                  // local scope
     console.log(x);
}

function function2(){
     console.log(x);
}
function function3(){
    console.log(x);
}

function1();
function2();
function3();