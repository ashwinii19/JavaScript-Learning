// // closure = A function defined inside of another function,
// //           the inner function has access to the variables
// //           and scope of the outer funtions.
// //           Allow for private variables and state maintenance
// //           used frequently in JS frameworks: React, Vue, Angular

function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye!";

outer();




// // --- Outside the function any one can acces the variables its not private any more ---

let count = 0;


function increment(){
    // let count = 0;                     // counter is not incrementing
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();


// // ----

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
       return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.count);       // undefined

console.log(`The current count is ${counter.getCount()}`);




// // ------------------------------------------------------------------------------

let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}


function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getscore(){
    return score;
}

increaseScore(5);
decreaseScore(2);
console.log(`The final score is ${getscore()}pts`);

// // ----

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;    
        console.log(`-${points}pts`);
    }

    function getscore(){
        return score;
    }

    return {increaseScore, decreaseScore, getscore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(2)
console.log(`The final score is ${game.getscore()}pts`);