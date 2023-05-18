const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid=404205adcfa05c84eafd8a62427fa38e";
const apiKey = ''

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search input")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const res = await fetch(apiUrl  + city + `&appid=${apiKey}`);
    let data =await res.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.name.temp) +'°C';
    document.querySelector('.humidity').innerHTML =data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == 'clouds'){
        weatherIcon.src = "images/cloud.jpg";
    } else if (data.weather[0].main == 'rain'){
        weatherIcon.src = "images/cloud.jpg";
    } else if (data.weather[0].main == 'sunny'){
        weatherIcon.src = "images/cloud.jpg";
    }
       

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})