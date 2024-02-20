
import React, { useEffect, useState } from "react";

const Location = () => {
  const [data, setdata] = useState(null);
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        // Fetch data with the current location
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Geo location is not available in your browser");
    }
  }, []);

  const fetchWeatherData = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1c539c8d33d4db9ade06af067c3b31b1`
    )
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        console.log("API response", json);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Current location is</h2>
      {position.latitude && position.longitude ? (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}

      <h2>The data is</h2>
      {data ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="city">Country: {data.sys.country}</p>
          <p className="city">City: {data.name}</p>
          <p className="temp">Temperature: {Math.round(data.main.temp)}℉</p>
          <p className="pressure">Pressure: {Math.round(data.main.pressure)} hPa</p>
          <p className="weather">Main: {data.weather[0].main}</p>
          <p className="weather">Description: {data.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Location;

