import React from "react";

const Icon = (props) => {
  const iconsList = {
    "01d": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "03d": "wi-cloud",
    "04d": "wi-cloud",
    "09d": "wi-day-rain",
    "10d": "wi-day-rain-wind",
    "11d": "wi-day-thunderstorm",
    "13d": "wi-day-snow",
    "50d": "wi-day-fog",
    "01n": "wi-moon-new",
    "02n": "wi-night-partly-cloudy",
    "03n": "wi-night-cloudy",
    "04n": "wi-cloudy",
    "09n": "wi-night-rain",
    "10n": "wi-night-showers",
    "11n": "wi-night-storm-showers",
    "13n": "wi-night-snow",
    "50n": "wi-night-fog",
  };

  const resultIcon = () => {
    for (const key in iconsList) {
      if (iconsList.hasOwnProperty(key)) {
        if (props.iconID === key) {
          return "wi " + iconsList[key];
        }
      }
    }
  };

  return <i className={resultIcon()}></i>;
};

export default Icon;
