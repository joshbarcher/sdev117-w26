
const food = ["focaccia bread", "sourdough", "chicken bowtie pasta", "enchiladas", "pizza"];
const color = ["rgb", 50, 30, 123, false];
const numbers = [42, 2, 10, 359, 44, 47, 77];

console.log(food);
console.log(color);

//replace values in the array
food[1] = "Quesadilla";
console.log(food);

//JavaScript is VERY flexible
// food[10] = "Ramen";
// food[11] = "Tacos";
food.push("Ramen");
food.push("Tacos");
food.push("Chicken Alfredo");
food.pop(); //remove the top index in the array
food.push("Brocolli");
console.log(food);

console.log(`Food at position 1: ${food[1]}`);
console.log(`Food at position 1: ${food[7]}`);

//there are a few ways to loop over an array!
for (let i = 0; i <= color.length - 1; i++) {
    console.log(color[i]);
}
console.log();

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}
console.log();

//you can also use a for-of loop (aka for-each loop)
for (const num of numbers) {
    console.log(`Num is ${num}`);
}
console.log();

for (const item of food) {
    console.log(`${item} sounds good!`);
}
console.log();

//use a higher order function (essentially a loop)
food.forEach(el => console.log(`Item of food is ${el}`));

if (food.includes("Quesadilla")) {
    console.log("Quesadilla is one of our favorites");
}

if (food.includes("Brocolli")) {
    console.log("Brocolli is one of our favorites");
}