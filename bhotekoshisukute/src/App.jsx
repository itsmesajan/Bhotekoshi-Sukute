// src/App.jsx
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

// Import all your components for the home page
import ContactUsPage from './components/pages/ContactUsPage';
import HomePage from './components/HomePage';


function App() {
  return (

      <div className='bg-slate-50' style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>

    );
}

export default App;