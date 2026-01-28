export function randomNum() {
    const num = Math.random();
    return num;
}

export function randomBetween(low, high) {
    const values = high - low + 1;
    const num = Math.floor(Math.random() * values) + low;
    return num;
}

export function randomBool() {
    const num = randomBetween(0, 1);
    return num === 1;
}

export function randomRGBColor() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    
    const rgbString = `(${r},${g},${b})`;
    return rgbString;
}