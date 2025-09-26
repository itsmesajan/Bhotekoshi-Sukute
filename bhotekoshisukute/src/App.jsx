// src/App.jsx
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

// Import all your components for the home page
import ContactUsPage from './components/pages/ContactUsPage';
import HomePage from './components/HomePage';
import AboutUs from './components/About/AboutUs';
import MobileFooterMenu from './components/MobileFooterMenu';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Header from './components/Header';
import RoomList from './components/Rooms/RoomList';
import RoomDetail from './components/Rooms/RoomDetail';
import Restaurant from './components/Restaurant/Restaurant';
import Hall from './components/Hall/Hall';
import Activities from './components/Activities';


function App() {
  return (

    < >
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/roomList" element={<RoomList />} />
           <Route path="/rooms/:id" element={<RoomDetail />} />
           <Route path="/restaurant" element={<Restaurant />} />
           <Route path="/hall" element={<Hall />} />
           <Route path="/activities" element={<Activities />} />

        </Routes>
      <MobileFooterMenu />
      <Footer />
    <FloatingButtons />
    </>

    );
}

export default App;