import "./normalizer.css";
import "./styles.css";

import { weatherService } from "./ApplicationLogic";
import { weatherUI } from "./DOMHandler";

class Init {
  form = document.querySelector("form");
  tempBTN = document.querySelector(".temp-btn");
  celsius = document.querySelector(".celsius");
  fahrenheit = document.querySelector(".fahrenheit");
  currentUnit = "metric";
  constructor() {
    this.tempBTN.addEventListener("click", this.changeCurrentUnit.bind(this));

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      weatherUI.handleFormSubmit(this.currentUnit);
    });
  }

  changeCurrentUnit() {
    this.celsius.classList.toggle("currentUnit");
    this.fahrenheit.classList.toggle("currentUnit");
    this.currentUnit = this.celsius.classList.contains("currentUnit")
      ? "metric"
      : "us";

    if (document.contains(document.querySelector(".location-name"))) {
      const currentLocation =
        document.querySelector(".location-name").textContent;
      weatherService
        .fetchData(currentLocation, this.currentUnit)
        .then((data) => weatherUI.renderWeatherData(data, this.currentUnit));
    }
  }
}

const init = new Init();
