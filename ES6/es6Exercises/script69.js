/*
 * 9. Open the developer tools on your favourite news site. 
 * Locate the first character of all headings, and log the
 * concatenation of the first characters
 */

var nodes = Array.from(document.querySelectorAll('h2'));
var text = "";

for(let node of nodes) {
    text = text.concat(node.textContent.charAt(0));
}
console.log(text);