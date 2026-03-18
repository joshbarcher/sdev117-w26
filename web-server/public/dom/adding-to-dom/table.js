
const button = document.querySelector("button");
const tbody = document.querySelector("tbody");

button.onclick = () => {
    //create DOM elements (robustly)
    const tr = document.createElement("tr");

    //add the new DOM elements to another element already on the page (as a child)
    tbody.appendChild(tr);

    //read in our "form" inputs
    const formElems = ["category", "share", "sources", "reduction"]
    for (let i = 0; i < formElems.length; i++) {
        //get the form element + value
        const elem = document.querySelector(`#${formElems[i]}`);
        const value = elem.value;

        //clear form value
        elem.value = "";

        //add a new table cell 
        addTableCell(tr, value);
    }
}

function addTableCell(tr, text) {
    const newTd = document.createElement("td");
    newTd.textContent = text;

    tr.appendChild(newTd);
}