import React, { FC } from "react";
import { WeatherData } from "../../store/types";
import './Weather.css'

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <div className="displayweather">
      <div className="maincard">
        <h1 className="cardtitle">
          {data.name} - {data.sys.country}
        </h1>
        <div className="level">
          <div>
            <p style={{ textAlign:'center' }}>
              {celsius}
              <sup>&#8451;</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
