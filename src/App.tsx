import React from 'react';
import Header from './components/header/Header';
import './components/header/header.css'
import './components/currentWeather/currentWeather.css';
import './components/notFound/notFound.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './state/store';
import { CityPage } from './pages/city/CityPage';
import { HomePage } from './pages/home/HomePage';

export default function App() {
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

