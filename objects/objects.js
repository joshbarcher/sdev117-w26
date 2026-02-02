
//create an object using "object literal notation"
const book = {
    title: "Way of Kings",
    series: "Stormlight Archive",
    author: {
        name: { 
            fname: "Brandon", 
            lname: "Sanderson", 
            middle: "Winn" 
        },
        age: 50,
        married: true
    },
    pages: 1100,
    synopsis: "Fantasy with crazy weather",
    hardCover: true,
    ebook: false,
    genres: ["fantasy", "action", "war"],
    editions: [
        { edition: "1st", year: 2010},
        { edition: "2nd", year: 2012}
    ],
    "well received": true,
    bookLength: function() { //defining a method (a function attached to an object)
        if (this.pages < 500) {
            return "short book";
        } else if (this.pages < 800) {
            return "average length book";
        } else {
            return "long book";
        }
    }
}

const book2 = {
    title: "IT",
    series: "",
    author: {
        name: { 
            fname: "Stephen", 
            lname: "King", 
            middle: "" 
        },
        age: 75,
        married: undefined
    },
    pages: 100,
    synopsis: "Killer clowns and awesome kids",
    hardCover: true,
    ebook: false,
    genres: ["horror", "coming of age"],
    editions: [
        { edition: "1st", year: 1985}
    ],
    bookLength: function() { //defining a method (a function attached to an object)
        if (this.pages < 500) {
            return "short book";
        } else if (this.pages < 800) {
            return "average length book";
        } else {
            return "long book";
        }
    }
}

book["well recieved"] = false;
console.log(`Was ${book.title} received well? ${book["well received"]}`);

//get the book length
let length = book.bookLength();
console.log(`The is a(n) ${length}`);

length = book2.bookLength();
console.log(`${book2.title} is a(n) ${length}`);
console.log(book2);

console.log(book);
console.log(`Part of the series: ${book.series}`);

//access the nested author property using dot notation
console.log(`The author ${book.author.name.fname} ${book.author.name.middle} ${book.author.name.lname} is ${book.author.age} years old`)

//print out the year of the first edition
const year = book.editions[0].year;
console.log(`The 1st edition was released in ${year}`);

if (book.hardCover) {
    console.log("This book will last for a bit");
} else {
    console.log("This book will have a bent cover");
}


