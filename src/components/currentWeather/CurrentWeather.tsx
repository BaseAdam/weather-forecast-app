import React from 'react';
import { useGetWeatherByParamQuery } from '../../features/weatherApi';
import { SpinnerCircular } from 'spinners-react';
import { NotFound } from '../notFound/notFound';

export interface City {
  name: string;
}

export function CurrentWeather({ name }: City): JSX.Element {
  const { isLoading, data: weatherData, error } = useGetWeatherByParamQuery(name);

  return isLoading ? (
    <SpinnerCircular size={100} />
  ) : weatherData && !error ? (
    <>
      <div>
        <div className="city-title-container">
          <h1 className="city-name">{name}</h1>
          <img className="weather-icon-current" src={weatherData?.current.condition.icon} alt={weatherData?.current.condition.text} />
        </div>
        <p className="weather-description">Current: {weatherData?.current.condition.text}</p>
        <ul>
          <li className="weather-info">
            Temperature: <span style={{ fontWeight: 'bold' }}>{weatherData?.current.temp_c.toFixed(0)}°C</span>
          </li>
          <li className="weather-info">
            Feels like: <span style={{ fontWeight: 'bold' }}>{weatherData?.current.feelslike_c.toFixed(0)}°C</span>
          </li>
          <li className="weather-info">
            Humidity: <span style={{ fontWeight: 'bold' }}>{weatherData?.current.humidity}%</span>
          </li>
          <li className="weather-info">
            Wind: <span style={{ fontWeight: 'bold' }}>{weatherData?.current.wind_kph} km/h</span>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <NotFound />
  );
}
