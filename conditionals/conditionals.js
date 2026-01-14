
const color = prompt("Enter a color name");

// if (color.length > 10 && color.includes("r")) {
//     console.log("This is a color with 'r' in it, and more than 10 chars");
// }

//if statements
// if (color === "red") 
//     console.log("Red is your favorite");
// else if (color === "brown") 
//     console.log("Brown is great");
// else if (color === "green") 
//     console.log("Green is good");
// else 
//     console.log("Not sure what color this is")

switch (color) {
    case "red": 
        console.log("Red is your favorite");
        console.log("Another");
        break;
    case "brown": 
        console.log("Brown is great");
        break;
    case "green": 
        console.log("Green is good");
        break;
    default:
        console.log("Not sure what color this is")
        break;
}