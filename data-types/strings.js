const fName = "Josh";
const lName = "Archer";
const middle = "B";

let fullName = "Your name is " + fName + " " + middle + ". " + lName + "!";
console.log(fullName);

fullName = `Your name is ${fName} ${middle}. ${lName}!`;
console.log(fullName);
    
const math = `Do some math: ${10 + 2 / 4}`;
console.log(math);

const rounded = `Some more math ${Math.round(10 / 3)}`;
console.log(rounded);

console.log(`Trying to get some inaccurate results: ${0.1 + 0.2}`);