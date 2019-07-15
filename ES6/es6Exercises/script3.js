/*
 * 3. Write a function using destructuring syntax to extract
 * the value of title, author of each book element in 
 * a books array
 */
const books = [
    { 
        title: 'Full Stack Javascript',
        author: 'Colin Ihrig and Adam Bretz',
        url: 'http://www,sitepoint.com/store/full-stack-javascript/'
    },
    {
        title: 'Javascript: Novir to Ninja',
        author: 'Darren Jones',
        url: 'http://www.sitepoint.com/store/learn-javascript/'
    },
    {
        title: 'Jump Start CSS',
        author: 'Louis Lazaris',
        url: 'http://www.sitepoint.com/store/jump-start-css/'
    }
]

function makeObj(title, author) {
    this.title = title;
    this.author = author;
}

function destructureArr(booksParam) {
   let books= [];
   for(var {title: t, author: a} of booksParam) {
       console.log('t: '+ t, 'a: '+ a);
       books.push(new makeObj(t,a));
   }
   
//    for(let book of books) {
//       console.log("book title: " + book.title + " book author: " + book.author);
//    }
   
}

destructureArr(books);
