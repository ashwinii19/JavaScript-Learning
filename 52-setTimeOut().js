// // setTimeOut() = function in JavaScript that allows yout to schedule 
// //                the execution of a function after an amount of time (milliseconds) 
// //                Times are approximate (varies based on the workload of the JavaScript runtime env.)

// //                setTimeOut(callback, delay);

function sayHello(){
    window.alert("Hello");
}

// setTimeout(sayHello, 3000);

// // -----------------------------------------------------------------------

// setTimeout(() => window.alert("Hello"), 3000);


// //                clearTimeOut(timeOutId) = can cancel a timeout before it triggers;

const timeOutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeOutId);




// // ---------------------- HTML -----------------------------
let timeOutid;

function startTimer(){
    timeOutid = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeOutid);
    console.log("CLEARED");
}

