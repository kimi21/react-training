/*
 * 15. Create an array that contains the last four
 * charcaters of another array
 */
const arr = ["This is an array", "ab", "connecticut"];

const lastChars = arr[arr.length - 1];
const lastArr = [lastChars.substr(-4)];
console.log(lastArr);