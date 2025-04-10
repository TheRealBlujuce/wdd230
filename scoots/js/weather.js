const currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=cozumel&units=imperial&appid=9fa25c11f574e5d2147865c9d1ceb74e";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=cozumel&units=imperial&appid=9fa25c11f574e5d2147865c9d1ceb74e";

// Current Weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Forecast (Next day @ 15:00)
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayCurrentWeather(data) {
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#humidity');
    const condition = document.querySelector('#condition');
    const icon = document.querySelector('#weather-icon');
    const weatherMessage = document.getElementById('weather-message');

    temp.textContent = data.main.temp.toFixed(0);
    humidity.textContent = data.main.humidity;
    condition.textContent = `${data.weather[0].main} - ${data.weather[0].description}`;
    icon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    icon.setAttribute('alt', data.weather[0].description);

    weatherMessage.textContent = `🌡️ Today’s High: ${data.main.temp_max.toFixed(0)}°F`;
}

function displayForecast(data) {
    const forecast = document.querySelector('#forecast');

    // Find next day's 15:00 (3PM) forecast
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const targetDate = tomorrow.toISOString().split("T")[0] + " 15:00:00";

    const match = data.list.find(item => item.dt_txt === targetDate);
    if (match) {
        forecast.textContent = match.main.temp.toFixed(0);
    } else {
        forecast.textContent = "N/A";
    }
}

// Close banner function
function closeBanner() {
    document.getElementById("weather-alert").style.display = "none";
}

// Fetch everything
fetchCurrentWeather();
fetchForecast();
