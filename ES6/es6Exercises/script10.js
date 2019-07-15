/*
 * 10. Arite a function that returns all elements 
 * of an array except the first element
 * 
 * -- Use destructuring to solve
 */

let arr = [1,2,3,4,5];

function returnArr([, ...rest]) {
    return rest;
}

let remainingArr = returnArr(arr);
console.log(remainingArr);