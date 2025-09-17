// promises
// an object that manages asynchronous operations
// wrap a promise object around asynchronous code
// "i promise to return a value"
// PENDING -> RESOLVED OR REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN TEH KITCHEN
// 3. TAKE OUT THE TRASH


function walkDog(callback){
    setTimeout(() => {
        console.log("you walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("you clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("you take out the trash");
        callback();
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!"));
    });
});



function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog");
        }, 1500);
    });
    
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitchen");
          }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you take out the trash");
          }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")});


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve("you walk the dog");
            }
            else{
                reject("you did not walk the dog");
            }
            
        }, 1500);
    });
    
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("you clean the kitchen");
            }
            else{
                reject("you did not clean the kitchen");
            }
          }, 2500);
    });
}

function takeOutTrash(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("you take out the trash");
            }
            else{
                reject("you did not take out the trash");
            }
          }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));