const API_KEY = "a1a0e13504d5e498939604d20014c327";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(`넌 지금 ${lat}, ${lon}에 있다`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    })
}

function onGeoError() {
    alert("위치 몰라서 날씨 못 알려줌");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);