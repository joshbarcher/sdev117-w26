
const degrees = 55;

let reaction = degrees >= 60 ? "warm" : "cold";
console.log(`I feel like it is ${reaction} today!`);

const cold = degrees >= 60 ? false : true;
console.log(`Is it cold today? ${cold}`);

const type = "odd";
const num = type === "even" ? 24 : 21;

console.log(`The number we gave you is ${num}`);

//you can nest ternaries (don't do this!)
reaction = degrees >= 60 ? degrees >= 80 ? "hot" : "warm" : "cold";
console.log(`I feel like it is ${reaction} today!`);
