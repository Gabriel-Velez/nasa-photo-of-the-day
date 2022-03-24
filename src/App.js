import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Compontents/Card";
import { API_BASE_URL, API_KEY } from "./Constants";

function App() {
  const [imageOfTheDay, setImageOfTheDay] = useState({});

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => setImageOfTheDay(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='App'>
      <h1>NASA photo of the day</h1>
      <h4>Gabriel Velez</h4>
      <Card
        title={imageOfTheDay.title}
        date={imageOfTheDay.date}
        explanation={imageOfTheDay.explanation}
        url={imageOfTheDay.url}
      />
    </div>
  );
}

export default App;
