import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../assets/banner.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

const heroSlides = [
  {
    title: "Experience the Best of Sukute",
    description:
      "Your perfect getaway for family fun and corporate retreats. Discover adventure and relaxation in the heart of Nepal.",
    buttonText: "Book Your Stay",
    buttonLink: "#",
    imageUrl: banner1,
  },
  {
    title: "Adventure Awaits",
    description:
      "Enjoy rafting, kayaking, canyoning and more with expert guides and safe facilities.",
    buttonText: "Explore Activities",
    buttonLink: "#",
    imageUrl: banner2,
  },
  {
    title: "Relax & Rejuvenate",
    description:
      "Unwind in our comfortable accommodations and enjoy delicious meals by the riverside.",
    buttonText: "View Packages",
    buttonLink: "#",
    imageUrl: banner3,
  },
];

const HeroSection = () => {
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
        {heroSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center gap-6 px-4 h-full relative"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("${slide.imageUrl}")`,
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
              <a
                href={slide.buttonLink}
                className="bg-[var(--primary-color)] hover:bg-blue-600 hover:text-white transition-all text-[var(--secondary-color)] font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105 inline-block"
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
