
const links = [
    "https://maze.toys/mazes/mini/daily/",
    "https://weirdorconfusing.com/",
    "https://onesquareminesweeper.com/",
    "https://clicking.toys/peg-solitaire/english/",
    "https://binarypiano.com/",
    "https://alwaysjudgeabookbyitscover.com/"
]

const button = document.querySelector("button");
const link = document.querySelector("a");
const extra = document.querySelector("#extra");

button.onclick = () => {
    const index = Math.floor(Math.random() * links.length);
    const url = links[index];

    //link.setAttribute("href", url);
    link.href = url;
    link.title = `A fun website (${url})`;
    extra.textContent = ` (${url})`;
}