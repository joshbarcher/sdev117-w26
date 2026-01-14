
let month = prompt("Name a month");

//make sure lowercase
month = month.toLowerCase();

//naive solution
switch (month) {
    case "january":
        console.log("There are 31 days");
        break;
    case "february":
        console.log("There are 28-29 days");
        break;
    case "march":
        console.log("There are 31 days");
        break;
    case "april":
        console.log("There are 30 days");
        break;
    case "may":
        console.log("There are 31 days");
        break;
    case "june":
        console.log("There are 30 days");
        break;
    case "july":
        console.log("There are 31 days");
        break;
    case "august":
        console.log("There are 31 days");
        break;
    case "september":
        console.log("There are 30 days");
        break;
    case "october":
        console.log("There are 31 days");
        break;
    case "november":
        console.log("There are 30 days");
        break;
    case "december":
        console.log("There are 31 days");
        break;
    default: 
        console.log("Invalid month"); 
        break; 
}

//better solution, leverages switch structure
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("There are 31 days");
        break;
    case "february":
        console.log("There are 28-29 days");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log("There are 30 days");
        break;
    default: 
        console.log("Invalid month"); 
        break; 
}