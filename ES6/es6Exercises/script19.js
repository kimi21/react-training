/*
 * 19.1 Define a function that concatenates several strings
 * - Function should take a separator and list of arguments
 * - Function should return list of arguments concatenated and separated
 * 
 */

 function stringConcat(separator, list) {
    let joinedString = list.join(separator);
    return joinedString;
 }

 let result = stringConcat('$', ["Eenie", "meenie", "miny", "mow"]);


 // OR if we are passing the string arguments individually, then : 

 function stringConcat(separator, ...list) {
    let joinedString = list.join(separator);
    return joinedString;
 }

let result = stringConcat('$', "Eenie", "meenie", "miny", "mow");
console.log(result);



/*
 * 19.2 --TO DO--
 * Define a function that creates HTML lists
 *
 * - Create a string containing HTML for a list
 *
 * - Only formal argument for a function is a string
 * that is "u" for unordered list and "o" for ordered list
 */

 function listCreator(listType) {


    if(listType === "u") {
        let listStr = `<ul>
                            <li></li>
                       </ul>`;
    }
 }



/*
 * 19.3 Create a factorial calculator
 */

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(4) ); // 24