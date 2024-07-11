import React from "react";
import { SpinnerCircular } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { useGetWeatherByParamQuery } from "../../features/weatherApi";
import { setCityToCompare } from "../../features/citySlice";
import Select from 'react-select';

interface CityComparisonProps {
    options: { value: string; label: string }[];
}

export const WeatherComparison = ({ options }: CityComparisonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const cityToCompare = useSelector((state: RootState) => state.city.cityToCompare);
    const city = useSelector((state: RootState) => state.city.city);
    const { data: chosenCity, error } = useGetWeatherByParamQuery(cityToCompare);

    return (
        city ? (
            <div className="weather-comparison-container">
                <div className="weather-comparison-title">
                    <p style={{marginRight: '20px'}}>Compare with:</p>
                    <Select
                        className="weather-comparison-select"
                        options={options}
                        onChange={(e) => dispatch(setCityToCompare(e?.value as string))}
                        isDisabled={!options.length}
                    />
                </div>
                <div className="weather-comparison-info">
                    {chosenCity === null ? (
                    <SpinnerCircular size={100} />)
                    : (chosenCity && city && chosenCity !== city && !error ? (
                        <>
                            <div className="weather-chosenCity">
                                <p>In <span style={{fontWeight: 'bold'}}>{city?.location.name}</span> the weather is:</p>
                                <ul className="weather-chosenCity-info-list">
                                    <li>{Number(
                                        (city?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)) === 0 ?
                                        'same temperature'
                                        : (Number((city?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)) > 0 ?
                                            `${Math.abs(Number((city?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)))}°C warmer`
                                            : `${Math.abs(Number((city?.current.temp_c - chosenCity?.current.temp_c).toFixed(0)))}°C colder`)}
                                    </li>
                                    <li>{Number(
                                        (city?.current.humidity - chosenCity?.current.humidity).toFixed(0)) === 0 ?
                                        'same humidity'
                                        : (Number((city?.current.humidity - chosenCity?.current.humidity).toFixed(0)) > 0 ?
                                            `${Math.abs(Number((city?.current.humidity - chosenCity?.current.humidity).toFixed(0)))}% more humidity`
                                            : `${Math.abs(Number((city?.current.humidity - chosenCity?.current.humidity).toFixed(0)))}% less humidity`)}
                                    </li>
                                    <li>{Number(
                                        (city?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)) === 0 ?
                                        'same wind speed'
                                        : (Number((city?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)) > 0 ?
                                            `${Math.abs(Number((city?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)))}km/h faster wind speed`
                                            : `${Math.abs(Number((city?.current.wind_kph - chosenCity?.current.wind_kph).toFixed(0)))}km/h slower wind speed`)}
                                    </li>
                                </ul>
                                <p>comparing to <span style={{fontWeight: 'bold'}}>{chosenCity?.location.name}</span>.</p>
                            </div>
                            <div className="weather-chosenCity">
                                <p>Currently in {chosenCity?.location.name}</p>
                                <img
                                    style={{marginTop: '-10px'}}
                                    src={chosenCity?.current.condition.icon} 
                                    alt={chosenCity?.current.condition.text}
                                />
                                <p style={{fontWeight: 'bold', margin: '0px', marginBottom: '5px'}}>{chosenCity?.current.temp_c.toFixed(0)}°C</p>
                                <p style={{margin: '0px', }}>{chosenCity?.current.condition.text}</p>
                            </div>
                        </>
                    ) : <></>)}
                </div>
            </div>
        ) : <></>
    );
}