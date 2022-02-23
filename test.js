const container = document.createElement("div")
container.classList.add("container")

const image = document.createElement("img")
image.classList.add("img")
const button = document.createElement("button")
button.innerText = "click"

const input = document.createElement("input")
input.type = "text"
input.placeholder = "Search a gif"

const h4 = document.createElement("h4")

document.body.appendChild(container)
container.appendChild(input)
container.appendChild(button)
container.appendChild(h4)
container.appendChild(image)

button.addEventListener("click", () => {
    const input = document.querySelector("input")
    const search = input.value
    renderGif(search)
    document.querySelector("input").value = "";
})

const img = document.querySelector(".img")
const text = document.querySelector("h4")

async function renderGif(search) {
    text.style.display = "none"
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IDGzSuuAs0D94d7tjUw9ymDha8gXyjIX&s=${search}`,
            { mode: "cors" });
        const searchData = await response.json();
        img.src = searchData.data.images.original.url;
        return img.src
    } catch (err) {
        text.innerText = "Try again?"
        text.style.display = "flex"
        document.querySelector("input").focus()
    }
}
