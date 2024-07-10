import React from 'react';
import Header from './components/header/Header';
import './components/header/header.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';

export default function App() {
  return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
);
}

