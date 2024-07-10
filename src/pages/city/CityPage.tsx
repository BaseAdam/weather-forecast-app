import React from 'react';
import { CurrentWeather } from '../../components/currentWeather/CurrentWeather';
import { useParams } from 'react-router-dom';

export const CityPage = () => {
    const { city } = useParams();
    
    return (
        <div className='city-page-container'>
            <div className='weather-container'>
                <CurrentWeather name={city as string}/>
            </div>
        </div> 
    )
}