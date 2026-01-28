import * as math from './math.module.js';

console.log(math.add(10, 20, 30));
console.log(math.add("A", "Good", "Day"));

console.log(math.add(100));
console.log(math.add(100, 200));
console.log(math.add("Hello", "World"));

console.log(math.add(true, false));

const even = math.isEven(20);
console.log(`20 is even? ${even}`);
const odd = math.isEven(21);
console.log(`21 is even? ${odd}`);

//using a return type that doesn't exist (undefined)
const evenNum = math.printEven(101);
console.log(evenNum);
console.log(math.printEven(100));

//print that 99 is not even (we are not using the return value here, oops!)
math.isEven(99);

//check for odd numbers
console.log(math.isOdd(4));
console.log(math.isOdd(5));
console.log(math.isOdd(6));
console.log(math.isOdd(7));
console.log(math.isOdd(8));
console.log(math.isOdd(9));
console.log(math.isOdd(10));