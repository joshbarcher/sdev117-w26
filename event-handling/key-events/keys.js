
const tbox = document.querySelector("#entry");
tbox.addEventListener("keypress", (event) => {
    //stop the default behavior of the key event (enter the character into the textbox)
    event.preventDefault();

    const character = event.key;
    console.log(character);

    const symbols = "~!@#$%^&*()_+`={}|:\"<>?[]\\;'.,/";
    if (symbols.includes(character)) {
        console.log(`Found bad character: ${character}`);
    } else {
        //manually put the good character into the textbox
        tbox.value += character;
    }
})