// weather api url

const url = "https://api.openweathermap.org/data/2.5/weather?q=Centerville&units=imperial&APPID=9fa25c11f574e5d2147865c9d1ceb74e"

// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#windspeed');
const windChill = document.querySelector('#windchill');
const condition = document.querySelector('#condition');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function  displayResults(weatherData) {

    currentTemp.innerHTML = `<strong>Current Temp: ${weatherData.main.temp.toFixed(0)}</strong>` + " °F";
    condition.innerHTML = `<strong>Condition: ${weatherData.weather[0].description}</strong>`;
    windSpeed.innerHTML = `<strong>Wind Speed: ${weatherData.wind.speed.toFixed(0)}</strong>`;

    if (weatherData.wind.gust > 0)
    {
      windChill.innerHTML = `<strong>WindChill: ${weatherData.wind.gust.toFixed(0)}</strong>`;
    }
    else
    {
      windChill.innerHTML = `<strong>WindChill: N/A</strong>`;
    }
    

  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
  }