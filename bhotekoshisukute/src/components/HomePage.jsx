import React from 'react'
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Accommodations from './Accommodations';
import VideoSection from './VideoSection';
import PackagesSection from './PackagesSection';
import Testimonials from './Testimonials';
import InstagramWall from './InstagramWall';
import MobileFooterMenu from './MobileFooterMenu';

import Footer from './Footer';


// Import the new page component
import FloatingButtons from './FloatingButtons';
import USPSection from './USPSection';
import HallSection from './HallSection';
import PlacesToExploreSection from './PlacesToExploreSection';


const HomePage = () => {
  return (
      <>
    
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <HeroSection />
      <AboutSection />
      <USPSection />
      <Accommodations />
    </main>
      <VideoSection />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
      <PackagesSection />
      <HallSection />
      <PlacesToExploreSection />
      <Testimonials />
      <div className=" border-t border-slate-300 pt-8"></div>
      <InstagramWall />
    </main>
  </>
  )
}

export default HomePage



