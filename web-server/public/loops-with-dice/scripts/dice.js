const button = document.querySelector("button");
const diceArea = document.querySelector(".dice-area");
const targetTextBox = document.querySelector("#target");

button.onclick = function(event) {
    //remove all inner HTML in the dice area first
    diceArea.innerHTML = "";
    
    const target = Number(targetTextBox.value);
    let randNum;
    do {
        randNum = Math.floor(Math.random() * 6) + 1; //Math.random() gives you a number in the range [0, 1)
        console.log(`images/${randNum}.png`);

        //add a dice image to the dice-area section
        diceArea.innerHTML += `<img src="images/${randNum}.png" alt="The number ${randNum}">`;

    } while (randNum !== target);

    console.log("All done!");
};