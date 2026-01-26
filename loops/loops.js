
//generate random numbers from 1-10, add them together, stop when the total is more than 100

let count = 0;
let numsGenerated = 0;

while (count <= 100)
{
    //generate a random number in [1, 10]
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);

    //add to count
    count += num;
    numsGenerated++;
}

console.log(`Total: ${count}`);
console.log(`Numbers generated: ${numsGenerated}`);