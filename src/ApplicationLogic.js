"use strict";

class WeatherService {
  constructor() {}
  async fetchData(location, tempUnit) {
    try {
      const response = await fetch(
        ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${tempUnit}&key=SP98US4D2FXTM36BTL9WZC26K&contentType=json`,
        { mode: "cors" },
      );
      if (!response.ok) {
        throw new Error(`${response.status}: Location not found!`);
      }
      console.log(response);
      const JSONdata = await response.json();
      console.log(JSONdata);
      const data = this.processData(JSONdata);
      return data;
    } catch (error) {
      return error;
    }
  }

  processData(data) {
    return {
      location: data.resolvedAddress,
      currentCondition: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      temperature: data.currentConditions.temp,
      feelsLike: data.currentConditions.feelslike,
      wind: data.currentConditions.windspeed,
      uvIndex: data.currentConditions.uvindex,
    };
  }
}

const weatherService = new WeatherService();

export { weatherService };
