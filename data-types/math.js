
//clock arithmetic
console.log(20 % 6); // 3 and 2/10 so mod is 2
console.log(21 % 6); // mod is 3
console.log(22 % 6); // mod is 4
console.log(23 % 6); // mod is 5
console.log(24 % 6); // mod is 0
console.log(25 % 6); // mod is 1
console.log(26 % 6); // mod is 2
console.log(27 % 6); // mod is 3
console.log(28 % 6); // mod is 4
console.log(29 % 6); // mod is 5
console.log(30 % 6); // mod is 0

//what are the indexes in an array/list of length 6

let num = 21;

num += 7; //28
num *= 2; //56
num -= 12; //44

console.log(num);

const result = 12 + 4 / 6 + (12 * 2);

let count = 10;
count++; //count = count + 1;
count++;
count--;

console.log(count); //11

//the increment happens before evaluation of an expression on these lines
++count;
--count;

let colorCount = 0;
colorCount++;
console.log(`colorCount is ${colorCount}`);
