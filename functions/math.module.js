
export function add(a, b, c) {
    //console.log(a, b, c);

    if (b === undefined) {
        return a;
    } else if (c === undefined) {
        return a + b;
    }
    return a + b + c;
}

export function printEven(num) {
    console.log("Calculating....");
    console.log("...............");
    console.log(`${num} is even? ${num % 2 === 0}`);
}

export function isEven(num) {
    return num % 2 === 0;
}

export function isOdd(num) {
    return !isEven(num);
}

