import React from "react";
import axios from 'axios';

const WeatherPage = ()=>{
    
    // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid={API key}

    async function gettingData(){
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=43.23&lon=76.88&appid=ed096897ea395bffcecec59f006b14dc ');
        let responseData = response.data;
        console.log(responseData.main);
    }
    gettingData()

    
    return(
        <section className="weather">
            <div className="container">
                <div className="weather__headline headline">
                    <div className="headline__title"> Weather for Today</div>
                </div>

                <div className="weather__main">
                    <form  className="weather__location">
                        <input type="text" placeholder="write your location..." />
                        <button> Submit</button>
                    </form>

                    <div className="weather__forecast">
                        <div className="weather__forecast-top">
                            <div className="weather__choose">
                                <span>Today</span>
                            </div>
                        </div>
                        <div className="weather__forecast-main">
                            <div className="weather__city">
                                <div className="weather__city-icon"></div>
                                <div className="weather__city-decription"></div>
                                <div className="weather__city-name"></div>
                            </div>
                            <div className="weather__additional">
                                <div className="weather__feels"></div>
                                <div className="weather__sea-level"></div>
                                <div className="weather__wind-speed"></div>
                            </div>
                            <div className="weather__temperature">
                                <div className="weather__day"></div>
                                <div className="weather__night"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WeatherPage;