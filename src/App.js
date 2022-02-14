import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";




import "./css/weather-icons.min.css";
import "./css/Result.css";
import "./css/App.css";
import "./css/Icon.css";
import "./css/Form.css";

const App = () => {
  const [city, setCity] = useState(' ');
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState();
  const [err, setErr] = useState(false);



  // get value of name city from input
  const getCity = (e) => {
    setCity(e.target.value);
  };

  //Submit to fetch data
  const submitCity = (e) => {
    e.preventDefault();
   fetchData(city)  
     
  };

  ///fetchData(city)
  const fetchData = (e) => {
    //API Key
    const APIkey = "d3fa2a81788f8a5131389ef69db84bb7";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${APIkey}&units=metric&lang=pl`;
    fetch(API)
      .then((resp) => {
        if (resp.ok) {
          setErr(false);
          return resp;
        }
        throw Error (resp.status);       
      })
      .then((resp) => resp.json())
      .then((resp) => {
        setForecast(resp); 
        setData(resp);     
        document.querySelector('input').value = '' ;
        document.querySelector('.error-msg').textContent = '' ;
        setCity('');
      })
      .catch(error=>{
        //show error content
          if(document.querySelector('input').value === ''){
            document.querySelector('.error-msg').textContent = 'Musisz coś wpisać';
            return;
          }else{
            document.querySelector('.error-msg').textContent = 'Wpisz poprawną nazwę miasta';
          }
        })
   
  };

  let content = (<div className="body_wrapper"> 
  </div>);
  return (
    <div>
      <Form   cityName={getCity} change={submitCity} />
      {data === null ? content : <Result forecast={forecast} nameCity={city} hasError={err} />}
    </div>
  );
};

export default App;
