import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useGetWeatherByParamQuery } from '../../features/weatherApi';
import { setCityToCompare } from '../../features/citySlice';
import Select from 'react-select';
import { City } from '../currentWeather/CurrentWeather';

interface CityComparisonProps extends City {
  options: { value: string; label: string }[];
}

export function WeatherComparison({ name, options }: CityComparisonProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const cityToCompare = useSelector((state: RootState) => state.city.cityToCompare);
  const { data: currentCity, error } = useGetWeatherByParamQuery(name);
  const { data: chosenCity } = useGetWeatherByParamQuery(cityToCompare);

  return currentCity && !error ? (
    <div className="weather-comparison-container">
      <div className="weather-comparison-title">
        <p style={{ marginRight: '20px' }}>Compare with:</p>
        <Select
          className="weather-comparison-select"
          options={options}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onChange={(e) => dispatch(setCityToCompare(e?.value as string))}
          isDisabled={!options.length}
        />
      </div>
      <div className="weather-comparison-info">
        {chosenCity === null ? (
          <SpinnerCircular size={100} />
        ) : // check if data is fetched and if the chosen city to compare is not the same as the current city
        chosenCity && currentCity && cityToCompare !== name && !error ? (
          <>
            <div className="weather-chosenCity">
              <p>
                In <span style={{ fontWeight: 'bold' }}>{currentCity?.location.name}</span> the weather is:
              </p>
              <ul className="weather-chosenCity-info-list">
                <li>
                  {Number((currentCity?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)) === 0
                    ? 'same temperature'
                    : Number((currentCity?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)) > 0
                    ? `${Math.abs(Number((currentCity?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)))}°C warmer`
                    : `${Math.abs(Number((currentCity?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)))}°C colder`}
                </li>
                <li>
                  {Number((currentCity?.current.humidity - chosenCity?.current.humidity).toFixed(0)) === 0
                    ? 'same humidity'
                    : Number((currentCity?.current.humidity - chosenCity?.current.humidity).toFixed(0)) > 0
                    ? `${Math.abs(Number((currentCity?.current.humidity - chosenCity?.current.humidity).toFixed(0)))}% more humidity`
                    : `${Math.abs(Number((currentCity?.current.humidity - chosenCity?.current.humidity).toFixed(0)))}% less humidity`}
                </li>
                <li>
                  {Number((currentCity?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)) === 0
                    ? 'same wind speed'
                    : Number((currentCity?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)) > 0
                    ? `${Math.abs(Number((currentCity?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)))}km/h faster wind speed`
                    : `${Math.abs(Number((currentCity?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)))}km/h slower wind speed`}
                </li>
              </ul>
              <p>
                comparing to <span style={{ fontWeight: 'bold' }}>{chosenCity?.location.name}</span>.
              </p>
            </div>
            <div className="weather-chosenCity">
              <p>
                Currently in <span style={{ fontWeight: 'bold' }}>{chosenCity?.location.name}</span>
              </p>
              <img style={{ marginTop: '-10px' }} src={chosenCity?.current.condition.icon} alt={chosenCity?.current.condition.text} />
              <p style={{ fontWeight: 'bold', margin: '0px', marginBottom: '5px' }}>{chosenCity?.current.temp_c.toFixed(0)}°C</p>
              <p style={{ margin: '0px' }}>{chosenCity?.current.condition.text}</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}
