
const hungry = false;
const chores = false;
const rainy = true;

if (hungry) {
    console.log("Eat something");
}

if (!hungry) {
    console.log("Go for a walk");
}

if (!hungry && !chores) {
    console.log("The noon hour is yours!");
} else {
    console.log("You got something to do soon");
}

//the || operator is inclusive OR
if (hungry || rainy) {
    console.log("Stay inside");
}

//there is another type of OR called exclusive or (aka XOR)
// if ((hungry || rainy) && !(hungry && rainy)) {

// }

const one = 10;
const two = 10;
const three = 30;

if (one < 100) {
    console.log(`${one} is small`);
}

if (one === two) {
    console.log(`The variables ${one} and ${two} are equal`);
} else {
    console.log(`The variables ${one} and ${two} are not equal`);
}

const name = "Susie"; //read susie from a textbook on the page

if (name) {
    console.log("Susie is not empty!");
} else {
    console.log("'' is empty");
}

const location = "https://www.instagram.com/";
console.log(location);