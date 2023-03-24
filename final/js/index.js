// Function to get and display the current weather data
function getWeatherData() {
    // Use the OpenWeatherMap API to get weather data for Carlsbad
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Centerville&units=imperial&APPID=9fa25c11f574e5d2147865c9d1ceb74e")
      .then(response => response.json())
      .then(data => {
        // Display the weather data in the weather card
        const weatherCard = document.querySelector(".weather");
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
  }
  
  // Function to display the number of specialty drinks submitted
  function displayDrinkCount() {
    // Check if the user has submitted any drinks, and display the count
    const drinkCount = localStorage.getItem("specialtyDrinkCount");
    if (drinkCount) {
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


// we can move this following stuff to the js when we add the "fresh" page

//   // Function to handle the form submission and store the drink count in localStorage
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const drinkCount = localStorage.getItem("specialtyDrinkCount");
//     localStorage.setItem("specialtyDrinkCount", (drinkCount ? parseInt(drinkCount) + 1 : 1));
//     form.reset();
//     displayDrinkCount();
//   }
  
//   // Add an event listener to the form to handle submissions
//   const form = document.querySelector("form");
//   form.addEventListener("submit", handleFormSubmit);