
const currentTemp = 35;
const currentWindSpeed = 3;

function getWindChill(tempF, windSpeed) {
    if (tempF <= 50 && windSpeed >= 3) {
      let windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
      return windChill.toFixed(2) + "°F";
    } else {
      return "N/A";
    }
  }
  
  // Example usage
  //console.log(getWindChill(32, 10)); // Output: "18.59°F"
  
function main()
{

    document.getElementById("temp").innerText = "Current Temperature: " + currentTemp.toString() +"°F";
    document.getElementById("windspeed").innerText = "Current Wind Speed: " + currentWindSpeed.toString() + " mp/h";
    document.getElementById("windchill").innerText = "Current WindChill: " + getWindChill(currentTemp, currentWindSpeed);

}

main();

