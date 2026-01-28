import * as random from './random.module.js';

let result = random.randomNum();
console.log(`Result is: ${result}`);

result = random.randomBetween(3, 10);
console.log(`Result is: ${result}`);

result = random.randomBool();
console.log(`Result is: ${result}`);

for (let i = 1; i <= 10; i++) {
    result = random.randomRGBColor(); // "(23, 182, 20)"
    console.log(`Result is: ${result}`);
}
