/*
 * 7. Write a function request which when called with parameter as 
 * shown below prints url and method value
 * 
 * (e.g.) request({url:'http://www.google.com', method:'GET});
 * 
 * prints value like : 
 * 
 * http://www.google.com
 * GET
 */

function request({url, method}) {
   console.log(`${url} \n ${method}`)
}

request({url:'http://www.google.com', method:'GET'});