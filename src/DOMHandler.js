import { weatherService } from "./ApplicationLogic";

const output = document.getElementById("output");
const input = document.querySelector("input");
const inputError = document.querySelector("input + span.error");

class WeatherUI {
  async handleFormSubmit() {
    this.clearInputError();
    if (input.validity.valueMissing) {
      input.setCustomValidity("Please enter the name of a city");
    } else {
      input.setCustomValidity("");
      input.blur();
      const data = await weatherService.fetchData(input.value.trim());
      if (data instanceof Error) {
        this.showInputError(data);
        return;
      }
      this.renderWeatherData(data);
    }
    input.reportValidity();

    input.value = "";
  }

  renderWeatherData(data) {
    output.innerHTML = `
      <h1 class="location-name">${data.location}</h1>
      <h2 class="current-condition">${data.currentCondition}</h2>
      <div class="weather-info">
        <div class="temperature-display">
          <span class="temperature-value">${data.temperature}</span>
          <span class="temperature-unit">C</span>
        </div>
        <div class="weather-details">
          <p class="feels-like">Feels like: ${data.feelsLike}</p>
          <p>WIND: ${data.wind} KMH</p>
          <p>UV INDEX: ${data.uvIndex}</p>
        </div>
      </div>
      `;
  }

  showInputError(data) {
    inputError.style.display = "block";
    inputError.classList.add("active");
    inputError.textContent = data;
  }

  clearInputError() {
    inputError.textContent = "";
    inputError.classList.remove("active");
    inputError.style.display = "none";
  }
}

const weatherUI = new WeatherUI();

export { weatherUI };
