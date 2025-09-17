// async / await
// async makes a function return a promise
// await makes an async function wait for a promise
// allows you write asynchronous cod ein sycnchronous manner
// async does not resolve or reject parameter
// everything after await is placed in an event queue

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

async function doChoes(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }
}