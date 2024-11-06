const city = document.getElementById('city'); 
const checkBtn = document.getElementById("check-btn"); 

let cityName = "New york";

checkWeather(cityName);

checkBtn.addEventListener('click', () => {
    if (cityName = city.value) {
        checkWeather(cityName);
    }
});




async function checkWeather(cityName) {

    const apiKey = "64c4993a55457f834c5546267a24c093";
    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    
    const weatherImage = document.querySelector(".weather-image");
    const countryFlag = document.querySelector(".country-flag");
    const countryName = document.querySelector(".country-name");
    const temperature = document.querySelector(".temperature-degree");
    const humidityDegree = document.querySelector(".humidity-degree");
    const windSpeed = document.querySelector(".wind-speed");

    const response = await fetch(apiUrl);
    let data = await response.json();

    weatherImage.src = `images/${data.weather[0].main}.png`;
    countryName.innerHTML = data.name;
    countryFlag.src = `https://flagsapi.com/${data.sys.country}/flat/32.png`;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidityDegree.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed + ' km/h';
}