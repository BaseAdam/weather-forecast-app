import React from 'react';
import { CurrentWeather } from '../../components/currentWeather/CurrentWeather';
import { useParams } from 'react-router-dom';
import { WeatherForecast } from '../../components/weatherForecast/weatherForecast';

export const CityPage = () => {
    const { city } = useParams();
    
    return (
        <div className='city-page-container'>
            <div className='weather-container'>
                <CurrentWeather name={city as string}/>
                <WeatherForecast name={city as string} day={1}/>
                <WeatherForecast name={city as string} day={2}/>
                <WeatherForecast name={city as string} day={3}/>
            </div>
        </div> 
    )
}