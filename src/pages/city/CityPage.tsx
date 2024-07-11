import React from 'react';
import { CurrentWeather } from '../../components/currentWeather/CurrentWeather';
import { useParams } from 'react-router-dom';
import { WeatherForecast } from '../../components/weatherForecast/weatherForecast';
import { WeatherComparison } from '../../components/weatherComparison/weatherComparison';

export function CityPage(): JSX.Element {
  const { city } = useParams();

  return (
    <div className="city-page-container">
      <div className="weather-container">
        <CurrentWeather name={city as string} />
        <WeatherForecast name={city as string} day={1} />
        <WeatherForecast name={city as string} day={2} />
        <WeatherForecast name={city as string} day={3} />
      </div>
      <WeatherComparison
        options={[
          { value: 'Wroclaw', label: 'Wroclaw' },
          { value: 'Cracow', label: 'Cracow' },
          { value: 'Gdansk', label: 'Gdansk' },
          { value: 'Poznan', label: 'Poznan' },
          { value: 'Szczecin', label: 'Szczecin' },
          { value: 'Warsaw', label: 'Warsaw' },
          { value: 'Ciechanow', label: 'Ciechanow' },
        ]}
      />
    </div>
  );
}
