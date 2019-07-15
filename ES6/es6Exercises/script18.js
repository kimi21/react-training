/*
 * 18. Write a function that executes a callback function
 * after a given delay in milliseconds. the default value 
 * of delay is one second.
 */

function delayFunction(delay = 1000) {
    
    setTimeout(function() {
        console.log("Hello");
    }, delay);
}

delayFunction();
