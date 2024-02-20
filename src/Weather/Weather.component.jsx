import React from "react";
import Location from "../WeatherLocation/WeatherLocation";
import BackgroundImage from "../Assets/backgroundWeather.jpg";
const WeatherComponent = () => {


  return (
    <>
      <div className=" h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Location/>
      
      </div>
    </>
  );
};
export default WeatherComponent;
