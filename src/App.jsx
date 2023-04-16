import React, { useEffect, useState } from 'react';
import Recommendation from './Recommendation';
import Food from './food';
import Weather from './Weather';
import Chatbot from './Chatbot'
import { Auth0Provider } from "@auth0/auth0-react";

const weatherData = {
  city: 'Mars',
  weather: [
    {
      description: 'Humid',
      icon: '01d',
    },
  ],
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
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const addFood = () => {
    setFoods([...foods, <Food key={foods.length} name={`food${foods.length}`} />]);
  };

  return (
    <div className="App">
      <h1 className="TITLE">MARSFIT</h1>
      <div>
      <Weather data={weatherData} />
      <Chatbot />
      </div>
      <Recommendation />
      <div className="foodcontainer">
        {typeof backendData.users === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <Food key={i} name={user} />)
        )}
        {foods}
        <button onClick={addFood}>Add Food</button>
      </div>

      
      
    </div>
  );
}

export default App;
