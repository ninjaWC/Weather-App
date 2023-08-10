
import { React,useState } from 'react';
import './assets/styles/App.css';
import HeaderApp from './components/app/HeaderApp';
import IntroPage from './components/pages/intro/IntroPage';
import WeatherPage from './components/pages/weather/WeatherPage';
// import bookmark from './assets/icons/bookmark.svg';
// import bookmarkChecked from './assets/icons/bookmark-checked.svg'
// import sunny from './assets/icons/icons-weather/sun.gif';
// import clouds from './assets/icons/icons-weather/clouds.gif';
// import rain from './assets/icons/icons-weather/rain-light.gif';
// import rainy from './assets/icons/icons-weather/rainy.gif';
// import snow from './assets/icons/icons-weather/snow.gif';
// import info from './assets/icons/icons-/system-outline-28-info.gif'
// import warning from './assets/icons/icons-/system-outline-55-error.gif'
// import avatar from './assets/icons/icons-/wired-outline-21-avatar.gif'

function App() {

  return (
    <div className="App">
      <header>
        <HeaderApp/>
      </header>
      <main>
        <IntroPage/>
        <WeatherPage/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

// <img src={info} />
// <img src={warning} />
// <img src={avatar} />
// <img src={sunny} />
// <img src={clouds} />
// <img src={snow} />
// <img src={rain} />
// <img src={rainy} />

//<a href="https://lordicon.com/">Icons by Lordicon.com</a>