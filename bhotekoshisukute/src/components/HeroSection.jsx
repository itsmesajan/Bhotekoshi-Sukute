import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center text-center rounded-2xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr1B6fd2C6AVeVKnMaTSX3oez7QYExFq80TCbSCnzQbEGmmharKhTUgJljKB63BOMgp4eQALCwmvHg_yZ5cRlNCScAgggpB31GZyVf7biGxlbZrygL-O0RizimyRu2oxLOFn66-0jEwrCvgx2closNvEmu4M_PI493D-nph75AozyWe0JGDXN3aUIa_wp0WpEUxXP_dUsPo2h_l7iswgbbYWjlm7SRU5dHaLK9-Y0dsWEUq0pRs9vsMm0z2R2wdfQMK5BtX9gw9Bh7")',
      }}
    >
      <Swiper
        className="hero-swiper w-full z-10"
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide className="flex flex-col items-center gap-6 px-4 my-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Experience the Best of Sukute
          </h1>
          <p className="text-slate-100 sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Your perfect getaway for family fun and corporate retreats.
            Discover adventure and relaxation in the heart of Nepal.
          </p>
          <button className="bg-[var(--primary-color)] hover:bg-blue-600 transition-all text-white font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105">
            Book Your Stay
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center gap-6 px-4 my-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Adventure Awaits
          </h1>
          <p className="text-slate-100 sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Enjoy rafting, kayaking, canyoning and more with expert guides and
            safe facilities.
          </p>
          <button className="bg-[var(--primary-color)] hover:bg-blue-600 transition-all text-white font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105">
            Explore Activities
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center gap-6 px-4 my-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Relax & Rejuvenate
          </h1>
          <p className="text-slate-100 sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Unwind in our comfortable accommodations and enjoy delicious meals
            by the riverside.
          </p>
          <button className="bg-[var(--primary-color)] hover:bg-blue-600 transition-all text-white font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105">
            View Packages
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;