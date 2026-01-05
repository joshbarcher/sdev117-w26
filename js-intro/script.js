//select our page elements
const button = document.querySelector("button");
const label = document.querySelector("#label");
let count = 0;

button.onclick = function() {
    count++;
    label.textContent = count;
}