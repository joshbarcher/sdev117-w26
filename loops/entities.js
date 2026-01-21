
let allEntities = "";

//loop over our entities
for (let i = 1; i <= 20000; i++) {
    //const entity = `<tr><td>&#${i};</td><td>&#${i};</td></tr>`;
    const entity = `&#${i};`;
    allEntities += entity + " ";
}

//console.log(allEntities);

//display the entities on the page!
const list = document.querySelector("#entities-list");
list.innerHTML = allEntities;