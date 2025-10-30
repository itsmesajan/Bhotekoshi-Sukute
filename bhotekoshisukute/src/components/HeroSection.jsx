import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import banner1 from "../assets/banner.webp";
// import banner2 from "../assets/banner2.webp";
// import banner3 from "../assets/banner3.webp";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";


const HeroSection = () => {

    const {
    data: sliderImages,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_slideshow.php",
    "sliderImages"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Loading…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error loading sliderImages: {error}
      </div>
    );
  }

  if (!sliderImages) {
    return <div className="text-center py-12">sliderImages Us not found.</div>;
  }

  return (
    <section className="relative min-h-[500px] sm:min-h-[700px] flex items-center rounded-2xl overflow-hidden bg-cover bg-center">
      <Swiper
        className="hero-swiper w-full z-10 h-full absolute inset-0"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true} // automatically adds prev/next buttons
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center gap-6 px-4 h-full relative"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("${slide.src}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-full absolute inset-0"
              ></div>
            </div>

            {/* Text content */}
            <div className="relative mx-auto text-center z-10 space-y-6">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {slide.title}
              </h1>
              <p className="text-slate-100 sm:text-lg lg:text-xl max-w-3xl mx-auto">
                {slide.description}
              </p>
              <Link
                to={slide.buttonLink}
                className="bg-[var(--primary-color)] hover:bg-blue-600 hover:text-white transition-all text-[var(--secondary-color)] font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105 inline-block"
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
