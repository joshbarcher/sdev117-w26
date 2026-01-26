
function randomNum() {
    const num = Math.random();
    return num;
}

function randomBetween(low, high) {
    const values = high - low + 1;
    const num = Math.floor(Math.random() * values) + low;
    return num;
}

function randomBool() {
    const num = randomBetween(0, 1);

    // if (num === 0) {
    //     return false
    // } else {
    //     return true
    // };

    return num === 1;
}

function randomRGBColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    
    const rgbString = `(${r},${g},${b})`;
    return rgbString;
}

let result = randomNum();
console.log(`Result is: ${result}`);

result = randomBetween(3, 10);
console.log(`Result is: ${result}`);

result = randomBool();
console.log(`Result is: ${result}`);

for (let i = 1; i <= 10; i++) {
    result = randomRGBColor(); // "(23, 182, 20)"
    console.log(`Result is: ${result}`);
}
