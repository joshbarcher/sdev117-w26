
let num;

do {
    //ask the user for a number and assign num
    num = parseInt(prompt("Enter a number"));

} while (Number.isNaN(num));

const powerOf2 = 2 ** num;
alert(`Your number is ${powerOf2}`);