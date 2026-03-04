
const output = document.querySelector("#output");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let count = 10;
    const rocketNum = Math.floor(Math.random() * 1000);

    //an interval repeats a function every x milliseconds...
    const timer = setInterval(() => {
        print(`Counting down rocket #${rocketNum}: ${count}`);
        count--;

        if (count < 0) {
            clearInterval(timer);

            print(`Blast off with rocket #${rocketNum}!`);

            setTimeout(() => {
                print("LOOK AT HER GO!");
            }, 2000);
        }

    }, 1000);
})

function print(msg) {
    output.innerHTML += msg + "<br>";
}