
//this function selects an element and updates its contents
function updateText(selector, text) {
    const elem = document.querySelector(selector);
    elem.innerHTML = text;
}

function updateColors(selector, foreground, background) {
    const elem = document.querySelector(selector);

    //access to CSS styles under the "styles" property
    elem.style.color = foreground;
    elem.style.backgroundColor = background;
}