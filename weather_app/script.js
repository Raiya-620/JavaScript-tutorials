// API KEY
const API_KEY = "758bf582115d96b0f230e74ed1295081";
// DOM ELEMENTS 
const cityInput = document.getElementById("cityName");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

// GRAB FUNCTION TRIGGER
searchButton.addEventListener("click", getWeatherData);

// GET WEATHER DATA
async function getWeatherData(){
    const city = cityInput.value.trim();
    if(!city){
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const data = await response.json();

        if(data.cod === "404"){
            weatherInfo.innerHTML = "Cannot find city";
            return;
        }

        weatherInfo.innerHTML = `
            <div class="weather-data">
                <h2>The weather in ${data.name}: </h2>
                <p><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}"></p>
                <p><strong>Temperature:</strong>${data.main.temp} °C</p>
                <p><strong>Weather:</strong>${data.weather[0].description}</p>
                <p><strong>Humidity:</strong>${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong>${data.wind.speed} m/s</p>
            </div>
        `;
        
    } catch (error) {
        console.error("Error fetching weather data:",error);

        weatherInfo.innerHTML = "An error occured while fetching weather data, please try again";
    };
};

