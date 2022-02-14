import React from "react";
import Icon from "./Icon";
import Countries from "./Countries";

const Result = (props) => {
  const data = props.forecast;
  const city = data.name;
  const temp = data.main.temp.toFixed();
  const pressure = data.main.pressure;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const feelsLike = data.main.feels_like.toFixed();
  const wind = data.wind.speed;
  const icon = data.weather[0].icon;
  const country = data.sys.country;

  let content = null;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  ///adding days
  const newDate = () => {
    const dd = new Date();
    const day = dd.getDate();

    const days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ];

    const months = [
      "Stycznia",
      "Lutego",
      "Marca",
      "Kwietnia",
      "Maja",
      "Czerwca",
      "Lipca",
      "Sierpnia",
      "Września",
      "Października",
      "Listopada",
      "Grudnia",
    ];
    const today = days[dd.getDay()];
    const month = months[dd.getMonth()];
    const currentDate = `${today}, ${day} ${month}`;

    return currentDate;
  };
  const curentTime = () => {
    const d = new Date();
    let tim = ``;
    if(d.getMinutes()< 10){
       tim = `${d.getHours()}:0${d.getMinutes()}`;
    }else{
       tim = `${d.getHours()}:${d.getMinutes()}`;
    }
    return tim;
  };

  let errMsg = (
    <>
      <p className="error-msg"> Nie ma {props.nameCity} w bazie danych!</p>
    </>
  );

  content = (
    <>
      <div className="city">
        <p>
          {capitalizeFirstLetter(city)}, <Countries countID={country} />
        </p>
      </div>
      <div className="output">
        <div className="output-center">
        <div className="Date">
            <h3>{newDate()}</h3>
            <p>{curentTime()}</p>
          </div>
          <div className="description">
            <Icon iconID={icon} />
            <p>{capitalizeFirstLetter(description)} </p>
          </div>
          <div className="temp">
            <h3>{temp} °C</h3>
            <p>{feelsLike} °C</p>
          </div>         
        </div> 
        <div className="output-bottom">
          <div className="humidity">
            <h3>Wilgotność</h3>
            <p>{humidity} %</p>
          </div>
          <div className="pressure">
            <h3>Ciśnienie</h3>
            <p>{pressure} hPa</p>
          </div>
          <div className="wind">
            <h3>Wiatr</h3>
            <p>{wind} m/s</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="body_wrapper">{props.hasError ? errMsg : content}</div>
  );
};

export default Result;
