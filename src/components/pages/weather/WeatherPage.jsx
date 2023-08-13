import React, { useEffect, useState } from "react";
import axios from 'axios';

const WeatherPage = ()=>{
    // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid={API key}

    const [city, setCity] = useState();
    // useEffect(()=>{

    // }, [])
    async function getWeather(event){

        event.preventDefault();
        localStorage.setItem('city', city);

        let cityName = localStorage.getItem('city')
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=ed096897ea395bffcecec59f006b14dc`)
        let responseData = response.data;
        let cityLat = responseData[0].lat, 
            cityLon = responseData[0].lon;

        setCity('');

            async function getWeatherData(){
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat.toFixed(2)}&lon=${cityLon.toFixed(2)}&appid=ed096897ea395bffcecec59f006b14dc `);
                let responseData = response.data;
                console.log(response);
                console.log(responseData);
            }
            getWeatherData();

    }  
    
    return(
        <section className="weather">
            <div className="container">
                <div className="weather__headline headline">
                    <div className="headline__title"> Weather for Today</div>
                </div>

                <div className="weather__main">
                    <form  className="weather__location" >
                        <input 
                            type="text"
                            placeholder="write your location..." 
                            value={city} 
                            onChange={cityName => setCity(cityName.target.value)} 
                            
                            />
                        <button onClick={getWeather}> Submit</button>
                    </form>

                    <div className="weather__forecast">
                        <div className="weather__forecast-top">
                            <div className="weather__choose">
                                <span>Current</span>
                            </div>
                        </div>
                        <div className="weather__forecast-main">
                            <div className="weather__city">
                                <div className="weather__city-icon"></div>
                                <div className="weather__city-decription">Clouds</div>
                                <div className="weather__city-name">Almaty</div>
                            </div>
                            <div className="weather__additional">
                                <div className="weather__feels">feels-like: 20C</div>
                                <div className="weather__sea-level">sea-level: 1006m</div>
                                <div className="weather__wind-speed">wind-speed: 5 mph</div>
                            </div>
                            <div className="weather__temperature">
                                <div className="weather__day"> 24°</div>
                                <div className="weather__night"> 18°</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WeatherPage;