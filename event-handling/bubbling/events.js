let logEl = null;

window.onload = function () {
    logEl = document.getElementById("log");

    addCardHandlers();
    addButtonHandlers();
};

function addCardHandlers() {
    const cards = document.querySelectorAll(".card");
    for (const card of cards) {
        card.addEventListener("click", (event) => {

            const id = card.dataset.id;
            log("CARD handler fired for " + id);

            const isOpen = card.dataset.open === "true";
            card.dataset.open = String(!isOpen);
        });
    }
}

function addButtonHandlers() {
    const buttons = document.querySelectorAll(".fav-btn");
    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            //turn off bubbling (for this particular event...)
            event.stopPropagation();

            const card = event.target.closest(".card");
            const id = card ? card.dataset.id : "?";

            log("FAVORITE button clicked for " + id);

            const isFav = button.dataset.fav === "true";
            button.dataset.fav = String(!isFav);
            button.textContent = isFav ? "⭐" : "🌟";
        });
    }
}

function log(message) {
    const line = document.createElement("div");
    line.textContent = message;
    logEl.appendChild(line);
}