//arrow functions use the arrow =>
const mult = (a, b) => {
    return a * b;
}

//return types are implicit on the same line
const sub = (a, b) => a - b;
const add = (a, b) => a + b;
const div = (a, b) => a / b;

//single parameters don't require parenthesis
const powOf2 = a => {
    return 2 ** a;
}

//no parameters requires parenthesis
const printPi = () => console.log(Math.PI);

//curly brackets are optional with single line functions
const printPowOf2 = a => console.log(2 ** a);
const sqrt = a => console.log(Math.sqrt(a));

//a higher order function
const compute = (func, max) => {
    for (let i = 1; i <= max; i++) {
        func(i);
    }
}

compute(printPowOf2, 32);
compute(sqrt, 32);

let result = mult(2, 13);
console.log(`Result: ${result}`);

console.log("Add", add(3, 4)); //7
console.log("Sub", sub(3, 4)); //-1
console.log("Mult", mult(3, 4)); //12
console.log("Div", div(3, 4)); //0.75

console.log(`Result: ${mult(2, 3)}`); //Result: 6

result = powOf2(12)
console.log(`Result: ${result}`);

printPowOf2(6); //64