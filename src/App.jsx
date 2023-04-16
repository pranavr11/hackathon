import React, { useEffect, useState } from 'react'
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
  
  const [backendData, setBackendData] = useState([{}]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <Recommendation />
      <div>
        {(typeof backendData.users === "undefined") ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )
      }
      </div>
      <Weather data={weatherData} />
      
    </div>
  )
}

export default App
