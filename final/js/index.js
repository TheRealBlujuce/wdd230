// Function to get and display the current weather data
function getWeatherData() {
    // Use the OpenWeatherMap API to get weather data for Carlsbad
    if (document.querySelector(".weather"))
    {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&APPID=9fa25c11f574e5d2147865c9d1ceb74e")
      .then(response => response.json())
      .then(data => {
        // Display the weather data in the weather card
        const weatherCard = document.querySelector(".today");
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const humidity = data.main.humidity;
        const html = `
          <h2>Current Weather in Carlsbad</h2>
          <p>Temperature: ${temperature} &#8457;</p>
          <p>Condition: ${condition}</p>
          <p>Humidity: ${humidity}%</p>
        `;
        weatherCard.innerHTML = html;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });

      fetch("https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=3&units=imperial&APPID=9fa25c11f574e5d2147865c9d1ceb74e")
      .then(response => response.json())
      .then(data => {
        // Display the weather data in the weather card
        const forecast = document.querySelector(".forecast");
        const day1 = data.list[0].main.temp;
        const day2 = data.list[1].main.temp;
        const day3 = data.list[2].main.temp;
        const html = `
        <h3>Three Day Temperature Forecast</h3>
				<ul>
					<li>Tomorrow: ${day1}°F</li>
					<li>Day After Tomorrow: ${day2}°F</li>
					<li>Three Days From Now: ${day3}°F</li>
				</ul>
        `;
        forecast.innerHTML = html;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
    }
  }
  
  // Function to display the number of specialty drinks submitted
  function displayDrinkCount() {
    // Check if the user has submitted any drinks, and display the count
    const drinkCount = localStorage.getItem("specialtyDrinkCount");
    if (drinkCount && document.querySelector(".submission")) {
      const submissionCard = document.querySelector(".submission");
      const html = `
        <h2>Specialty Drink Submissions</h2>
        <p>You have submitted ${drinkCount} specialty drinks!</p>
      `;
      submissionCard.innerHTML = html;
    }
  }
  
  // Call the getWeatherData and displayDrinkCount functions when the page loads
  window.addEventListener("load", function() {
    getWeatherData();
    displayDrinkCount();
  });

