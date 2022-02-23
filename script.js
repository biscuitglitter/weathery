"use strict";

const container = document.createElement("div")
container.classList.add("container")

document.body.appendChild(container)

async function fetchData(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

const renderLocation = () => {
    
}

async function showPosition(pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;
    const coordinates = [latitude, longitude]
    const lat = coordinates[0]
    const lon = coordinates[1]
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=81353d18461f4d7562760894feb3ada0`;
    let data = await fetchData(url);
    let temperature = data.main.temp
    let name = data.name
    let country = data.sys.country
    let mainweather = data.weather[0]["main"]
    let description = data.weather[0]["description"]
    renderLocation(temperature, name, country, mainweather, description)
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}
getLocation()