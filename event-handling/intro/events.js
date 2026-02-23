
//select an element
const img = document.querySelector("#place");
const img2 = document.querySelector("#waterfall");

//set an event handler (only the last assigned handler works)
//img.onclick = imageClick;
//img.onclick = logDate;

//alternatively, use listeners for multiple handlers
img.addEventListener("dblclick", imageClick);
img.addEventListener("dblclick", logDate);
img.addEventListener("dblclick", printEvent);
img.addEventListener("dblclick", printEventTarget);

//share my event handlers
img2.addEventListener("dblclick", printEventTarget);

img2.addEventListener("mouseenter", () => {
    console.log("Mouse entered")

    const img = event.target;
    img.style.border = "2px solid rgb(198, 244, 255)";
    img.style.scale = 1.025;
    img.style.transition = "0.25s";
});

img2.addEventListener("mouseleave", () => {
    console.log("Mouse left")

    const img = event.target;
    img.style.border = "2px solid rgb(198, 244, 255, 0.0)";
    img.style.scale = 1;
});

// img2.addEventListener("mousemove", (event) => {
//     const x = event.offsetX;
//     const y = event.offsetY;

//     console.log(`Mouse moved: (${x},${y})`);
// });

//handle the event
function imageClick() {
    console.log("You clicked on the image");
}

function logDate() {
    const date = new Date();
    console.log(date);
}

function printEvent(event) {
    console.log(event);
}

function printEventTarget(event) {
    console.log("You clicked on ...");
    console.log(event.target);
    console.log(`The image is ${event.target.width} pixels wide`);
}