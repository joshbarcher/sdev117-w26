/*
    We are learning about variables

    Author: Josh Archer 
    Date: 1/7/26
*/

//declare a few variables
const message = "Hello";
const number = 42;
const flag = true;
const pringles = {
    full: true, 
    type: "Sour Cream"
}
let numArray = ["red", "green", "blue"];
numArray = [true, false, false];

//print out their types
console.log(typeof number);
console.log(typeof message);

const type1 = typeof pringles;
const type2 = typeof numArray;

console.log(type1, type2);
console.log(numArray);

// const my_variable_here  //snake case
// const myVariableHere    //camel case
// const MyVariableHere    //pascal case

console.info("I'm an info message");
console.warn("I'm an warn message");
console.error("I'm an error message");

