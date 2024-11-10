import { weatherService } from "./ApplicationLogic";
const input = document.querySelector("input");
const inputError = document.querySelector(".error");

const output = document.getElementById("output");

console.log(inputError);

//images
import clear_day from "./assets/weather-icons/clear-day.svg";
import clear_night from "./assets/weather-icons/clear-night.svg";
import cloudy from "./assets/weather-icons/cloudy.svg";
import fog from "./assets/weather-icons/fog.svg";
import hail from "./assets/weather-icons/hail.svg";
import partly_cloudy_day from "./assets/weather-icons/partly-cloudy-day.svg";
import partly_cloudy_night from "./assets/weather-icons/partly-cloudy-night.svg";
import rain_snow_showers_day from "./assets/weather-icons/rain-snow-showers-day.svg";
import rain_snow_showers_night from "./assets/weather-icons/rain-snow-showers-night.svg";
import rain_snow from "./assets/weather-icons/rain-snow.svg";
import rain from "./assets/weather-icons/rain.svg";
import showers_day from "./assets/weather-icons/showers-day.svg";
import showers_night from "./assets/weather-icons/showers-night.svg";
import sleet from "./assets/weather-icons/sleet.svg";
import snow_showers_day from "./assets/weather-icons/snow-showers-day.svg";
import snow_showers_night from "./assets/weather-icons/snow-showers-night.svg";
import snow from "./assets/weather-icons/snow.svg";
import thunder_rain from "./assets/weather-icons/thunder-rain.svg";
import thunder_showers_day from "./assets/weather-icons/thunder-showers-day.svg";
import thunder_showers_night from "./assets/weather-icons/thunder-showers-night.svg";
import thunder from "./assets/weather-icons/thunder.svg";
import wind from "./assets/weather-icons/wind.svg";

const weatherIcons = {
  "clear-day": clear_day,
  "clear-night": clear_night,
  cloudy: cloudy,
  fog: fog,
  hail: hail,
  "partly-cloudy-day": partly_cloudy_day,
  "partly-cloudy-night": partly_cloudy_night,
  "rain-snow-showers-day": rain_snow_showers_day,
  "rain-snow-showers-night": rain_snow_showers_night,
  "rain-snow": rain_snow,
  rain: rain,
  "showers-day": showers_day,
  "showers-night": showers_night,
  sleet: sleet,
  "snow-showers-day": snow_showers_day,
  "snow-showers-night": snow_showers_night,
  snow: snow,
  "thunder-rain": thunder_rain,
  "thunder-showers-day": thunder_showers_day,
  "thunder-showers-night": thunder_showers_night,
  thunder: thunder,
  wind: wind,
};

// clear error message when typing
input.addEventListener("input", () => {
  input.setCustomValidity("");
});

class WeatherUI {
  constructor() {}
  async handleFormSubmit(tempUnit) {
    this.clearInputError();
    if (input.validity.valueMissing) {
      input.setCustomValidity("Please enter the name of a city");
    } else {
      input.setCustomValidity("");
      input.blur();
      const data = await weatherService.fetchData(input.value.trim(), tempUnit);
      console.log(data);
      if (data instanceof Error) {
        this.showInputError(data);
        return;
      }
      this.renderWeatherData(data, tempUnit);
    }
    input.reportValidity();

    input.value = "";
  }

  renderWeatherData(data, tempUnit) {
    const TempUnit = tempUnit === "us" ? "F" : "C";
    const speedUnit = tempUnit === "us" ? "MPH" : "KMH";
    output.innerHTML = `
      <h1 class="location-name">${data.location}</h1>
      <div class="condition-icon">
         <img class="weather-icon" src="${weatherIcons[data.icon]}">
        <h2 class="current-condition">${data.currentCondition}</h2>
    </div>
      <div class="weather-info">
        <div class="temperature-display">
          <span class="temperature-value">${data.temperature}</span>
          <span class="temperature-unit">&deg;${TempUnit}</span>
        </div>
        <div class="weather-details">
          <p class="feels-like">Feels like: ${data.feelsLike}</p>
          <p>WIND: ${data.wind} ${speedUnit}</p>
          <p>UV INDEX: ${data.uvIndex}</p>
        </div>
      </div>
      `;
  }

  showInputError(data) {
    inputError.style.visibility = "visible";
    inputError.classList.add("active");
    inputError.textContent = data;
  }

  clearInputError() {
    inputError.textContent = "";
    inputError.classList.remove("active");
    inputError.style.visibility = "hidden";
  }
}

const weatherUI = new WeatherUI();

export { weatherUI };
