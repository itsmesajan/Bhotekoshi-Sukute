// src/App.jsx
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

// Import all your components for the home page
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import Accommodations from './components/Accommodations';
import VideoSection from './components/VideoSection';
import ExploreSection from './components/ExploreSection';
import PackagesSection from './components/PackagesSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


// Import the new page component
import ContactUsPage from './components/pages/ContactUsPage';
import FloatingButtons from './components/FloatingButtons';


const HomePage = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <Accommodations />
    </main>
      <VideoSection />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ExploreSection />
      <PackagesSection />
      <Testimonials />
      <Gallery />
    </main>
      

    <Footer />
    <FloatingButtons />
  </>
);

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