/* 
 * 1. create a function that lists out all the numbers
 * divisible by 3 from given array of numbers
 * 
 * const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 */

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function divBy3(array) {
    
    const result = array.filter(number => number%3 === 0);
    console.log(result);
}

divBy3(array);