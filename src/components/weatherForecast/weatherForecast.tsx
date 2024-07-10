import React from "react";
import { useGetWeatherByParamQuery } from "../../features/weatherApi";
import { SpinnerCircular } from "spinners-react";

export interface WeatherForecastProps {
    name: string;
    day: number;
  }

export const WeatherForecast = ({name, day}: WeatherForecastProps) => {
  const { isLoading, data: weatherData, error } = useGetWeatherByParamQuery(name)
  return (
    isLoading ? (
      <SpinnerCircular size={100} />
    ) : (weatherData&& !error ? (
    <div className='weather-forecast-container'>
      <p className='date'>{weatherData?.forecast.forecastday[day].date}</p>
      <img className='weather-icon-forecast' 
        src={weatherData?.forecast.forecastday[day].hour[0].condition.icon} 
        alt={weatherData?.forecast.forecastday[day].hour[0].condition.text} />
      <p style={{fontWeight: 'bold'}}>{weatherData?.forecast.forecastday[day].hour[0].temp_c.toFixed(0)}°C</p>
    </div>
      )
      : <></>
    )
  )
}


