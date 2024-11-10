import "./normalizer.css";
import "./styles.css";

import { weatherUI } from "./DOMHandler";
const form = document.querySelector("form");
const tempBTN = document.querySelector(".temp-btn");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
let currentUnit = "metric";

class Init {
  constructor() {
    tempBTN.addEventListener("click", this.changeCurrentUnit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      weatherUI.handleFormSubmit(currentUnit);
    });
  }

  changeCurrentUnit() {
    celsius.classList.toggle("currentUnit");
    fahrenheit.classList.toggle("currentUnit");
    currentUnit = celsius.classList.contains("currentUnit") ? "metric" : "us";
  }
}

const init = new Init();
