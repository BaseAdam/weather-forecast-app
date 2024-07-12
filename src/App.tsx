import React from 'react';
import Header from './components/header/Header';
import './components/header/header.css';
import './pages/city/components/current_weather/current_weather.css';
import './components/not_found/not_found.css';
import './pages/city/components/weather_forecast/weather_forecast.css';
import './pages/city/components/weather_comparison/weather_comparison.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { CityPage } from './pages/city/CityPage';
import { HomePage } from './pages/home/HomePage';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
