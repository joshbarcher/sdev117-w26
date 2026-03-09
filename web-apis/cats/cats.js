
const button = document.querySelector("button");

//register event handlers
window.addEventListener("load", loadCat);
button.addEventListener("click", loadCat);

//using await inside a function, requires the function to use the async keyword
//(this turns the function, loadCat in this case, into a promise as well)
async function loadCat() {
    const url = "https://api.thecatapi.com/v1/images/search";
    const config = {
        method: "get",
        headers: {
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    }

    //await + async
    const response = await fetch(url, config);
    const json = await response.json();
    addCat(json);
}

function addCat(jsonData) {
    console.log("Rendering cat")
    //access the first and only element in the array response
    const record = jsonData[0]; 
    const url = record.url;
    const width = record.width;

    const catImg = document.createElement("img");
    catImg.src = url;
    catImg.alt = `A picture of a cat, with id ${record.id}`;
    
    const box = document.querySelector("#cat-box");
    box.appendChild(catImg);
}

//for reference - using promise.then()

//make the asynchronous HTTP request (through a JS promise)
// console.log("Above fetch()");
// fetch(url, config)
//     .then((response) => {
//         console.log("Got the response")
//         //convert the data to JSON format
//         return response.json();
//     })
//     .then((json) => {
//         console.log("Got the JSON data")
//         console.log(json);
//         showCat(json);
//     })
// console.log("Below fetch()");