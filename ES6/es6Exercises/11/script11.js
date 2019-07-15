/*
 * 11.1 Write a function that returns an array from a given string
 *  wrap("package") //result should be ["package"]
*/

function wrap(str) {
    let [...arr] = [str];
    console.log(`str : ${str}  ${typeof str}`);
    return arr;
}

var arr = wrap("package");
console.log(`arr : ${arr}  ${typeof arr}`);



/*
 * 11.2 Write a function that takes an array of string
 * and returns plain string
 * unwrap(["package"]) //result should be "package"
*/


function unwrap(arr) {
    let [str] = arr;
    console.log(`arr : ${arr}  ${typeof arr}`);
    return str;
}

let str = unwrap(["package"]);
console.log(`str : ${str}  ${typeof str}`);
