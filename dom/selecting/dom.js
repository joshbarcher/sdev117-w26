
const button = document.querySelector("button");
const body = document.body;

button.onclick = () => {
    console.log(button.textContent);

    if (button.textContent === "Nightmode") {
        button.textContent = "Brightmode";
        body.className = "night-mode";
    } else {
        button.textContent = "Nightmode";
        body.className = "bright-mode";
    }
}

//select multiple elements
const elems = document.querySelectorAll("ul ul > li");
console.log(elems);

// const first = elems[0];
// first.style.color = "green";
// first.textContent = "Hello";

for (let i = 0; i < elems.length; i++) {
    elems[i].style.color = "green";
}

for (let elem of elems) {
    elem.style.textTransform = "lowercase";
}

//target the science fictions movies and change the "text"
const horror = document.querySelector("#favorite");
//horror.innerHTML = "<strong>Hello</strong> world!";
//horror.textContent = "<strong>Hello</strong> world!";
const maliciousContent = "<script>window.location='https://www.google.com'</script>";
horror.innerHTML = maliciousContent;

const items = horror.querySelectorAll("li");