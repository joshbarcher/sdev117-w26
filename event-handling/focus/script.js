
const formElems = document.querySelectorAll("input, select");

//add the event handler to each form element we select
for (const elem of formElems) {
    elem.addEventListener("focus", () => elem.style.backgroundColor = "lightgreen" );
    elem.addEventListener("blur", () => elem.style.backgroundColor = "white" );
}