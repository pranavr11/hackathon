import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recommendation from './Recommendation'
import Weather from './Weather'

const weatherData = {
  city: 'Mars',
  weather: [{
    description: 'Humid',
    icon: '01d',
  }],
  main: {
    temp: 25,
    feels_like: 28,
    humidity: 60,
    pressure: 1013,
  },
  wind: {
    speed: 10,
  },
};

function App() {
  

  return (
    <div className="App">
      <Recommendation />
      <Weather data={weatherData} />
    </div>
  )
}

export default App
