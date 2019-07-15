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