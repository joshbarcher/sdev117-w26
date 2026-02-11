//show a new image every 4 seconds
setInterval(() => {
    //generate a random number from 1-10
    const number = Math.floor(Math.random() * 10) + 1;

    //generate a string images/1.png, images/2.png, ... , images/x.png
    const imgPath = `images/${number}.png`;
    console.log(imgPath);

    //select + change src attribute for the image
    const waPic = document.querySelector("#wa-pic");
    waPic.src = imgPath;
}, 4000);