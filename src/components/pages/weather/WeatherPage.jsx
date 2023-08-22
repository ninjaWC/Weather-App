import React, { useEffect, useState } from "react";
import axios from 'axios';

const WeatherPage = ()=>{

    let todayDate = new Date(),
        day = todayDate.getDate(),
        month = todayDate.getMonth(),
        year = todayDate.getFullYear();

    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();

    useEffect(()=>{
      weatherAPI();
    },[]);

    async function weatherAPI(event){
        event.preventDefault();

        localStorage.setItem('city', city);
        
        let cityName = localStorage.getItem('city')
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=ed096897ea395bffcecec59f006b14dc`)
          .catch(reject => alert(reject));
        setCity('');
        
        let cityLat = response.data[0].lat, 
            cityLon = response.data[0].lon;

            async function getWeatherData(){
              const responseWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat.toFixed(2)}&lon=${cityLon.toFixed(2)}&appid=ed096897ea395bffcecec59f006b14dc `);
              localStorage.setItem('weatherData', JSON.stringify(responseWeather.data))
              setWeatherData( JSON.parse(localStorage.getItem('weatherData')));
            }
            getWeatherData();
    }

    return (
      <section className="weather">
        <div className="container">
          <div className="weather__headline headline">
            <div className="headline__title"> Weather for Today</div>
            <span>{day}.{month + 1}.{year}</span>
          </div>

          <div className="weather__main">
            <form 
              className="weather__location"
              onSubmit={weatherAPI}
              >
              <input
                type="text"
                placeholder="write your location..."
                value={city}
                onChange={(cityName) => setCity(cityName.target.value)}
                
              />
              <button className="custom__btn btn">Submit</button>
            </form>

            <div className="weather__forecast">
              <div className="weather__forecast-top">
                <div className="weather__choose">
                  <span className="weather__block weather__block--active">
                    Current
                  </span>
                  <span className="weather__block">4 days</span>
                </div>
              </div>

              {!weatherData 
                ? 
                <div className="weather__forecast-main">
                    <div> No Weather Data Available!</div>
                </div>
                : 
                <div className="weather__forecast-main">
                  <div className="weather__city">
                    <div className="weather__city-icon"></div>

                    <div className="weather__city-decription">
                      {weatherData.weather[0].description}
                    </div>
                    <div className="weather__city-name">
                      {weatherData.name}
                    </div>
                  </div>

                  <div className="weather__data">
                    <div className="weather__additional">
                      <div className="weather__feels">
                        feels-like: {(weatherData.main.feels_like - 273.15).toFixed(0)}
                        °C
                      </div>
                      <div className="weather__sea-level">humidity: {weatherData.main.humidity}%</div>
                      <div className="weather__wind-speed">
                        wind-speed:  {weatherData.wind.speed} 
                        m/s
                      </div>
                    </div>
                    <span className="weather__temperature">

                        {(weatherData.main.temp - 273.15).toFixed(0)}
                        °C
                    </span>
                  </div>

                </div>
              }
              
            </div>
          </div>
        </div>
      </section>
    );
}


export default WeatherPage;