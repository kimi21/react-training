/* 
 * 2. Write a simple destructuring expression to find the value of title,
 * author firstname and publisher web url from the given object
 * 
 * - Change the variable name to doc, firstname to name, and url to web
 * 
 */

const meta = {
    title: 'Destructuring assignment',
    authors:[
        {
            firstname:'Craig', 
            lastname: 'buckler'
        }
    ],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};


const {title:doc, authors: [{firstname: name}], publisher: {url: web}} = meta;
console.log("title: ", doc);
console.log("firstname: ", name);
console.log("url: ", web);