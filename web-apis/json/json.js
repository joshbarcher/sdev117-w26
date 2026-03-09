//start with a JS object
const object = {
    material: "ceramic",
    holds: "plant",
    color: "light-blue",
    breakable: true,
    size: 10
}
console.log(object);
console.log(object.breakable);

//to serialize a JS object to JSON text
const jsonText = JSON.stringify(object);
console.log(jsonText);
//console.log(jsonText.breakable);

//to deserialize JSON text back to a JavaScript object
const objectAgain = JSON.parse(jsonText);
console.log(objectAgain);