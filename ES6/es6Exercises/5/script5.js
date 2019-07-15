/*
 * Create a mapper function using arrow symantics that returns
 * an object having following attribute when operating on array
 * 
 * (e.g.) console.log([1,2,3].map(mapperFns))
 * 
 * (output) - [{
 *                  isEven: false,
 *                  number: 1,
 *                  squared: 1
 *              },
 *              {
 *                  isEven: true,
 *                  number: 2,
 *                  squared: 4
 *              },
 *              {
 *                  isEven: false,
 *                  number: 3,
 *                  squared: 9
 *              }] 
 * 
 */

// function checkForEven(num) {
//     return num % 2 === 0 ? true : false;
// }

// function squared(num) {
//     return num * num;
// }

function mapperFns(num, index) {
    let newObj = {};
    // newObj.isEven = checkForEven(num);
    // newObj.number = num;
    // newObj.squared = squared(num);

    newObj.isEven = ((num) => num % 2 === 0 ? true : false)(num);
    newObj.number = num;
    newObj.squared = (num) => num * num;
    
    return newObj;
}

const arr = [1,2,3];
const reformattedArr = arr.map(mapperFns);
console.log(reformattedArr);



