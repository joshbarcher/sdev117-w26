window.addEventListener("load", loadLinks);

async function loadLinks() {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const config = {
        method: "get",
        headers: {
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    }

    //await + async
    const response = await fetch(url, config);
    const json = await response.json();
    addLinks(json);
}

function addLinks(json) {
    const linksList = document.querySelector("#links-list");
    
    for (const elem of json) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = elem.url;
        a.textContent = elem.url;

        li.appendChild(a);
        linksList.appendChild(li);
    }
}