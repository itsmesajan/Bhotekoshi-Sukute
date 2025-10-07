import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { activities } from "../../constants/data";


const Activities = () => {
  return (
    <main className="flex-grow bg-secondary dark:bg-dark/95">
      <div className="container mx-auto px-6 py-16 lg:py-32">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
            Discover the Thrill
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 ">
            From thrilling adventures to relaxing pastimes, discover the perfect experience for your gateway. 
          </p>
        </div>

        {/* activities Sections */}
        <div className="space-y-16 overflow-hidden">
          {activities.map((activities, index) => (
            <div
              key={activities.id}
              className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Swiper */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl w-full md:w-1/2 bg-transparent">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-48 sm:h-64 md:h-96 bg-transparent"
                  style={{ background: "transparent" }}
                >
                  {activities.images.map((img, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center bg-transparent">
                      <img
                        src={img}
                        alt={`Slide ${i}`}
                        className="w-full h-full object-cover bg-transparent"
                        style={{ background: "transparent" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="flex flex-col md:w-1/2">
                <h3 className="text-3xl font-display font-bold text-[var(--secondary-color)] dark:text-light mb-3">
                  {activities.title}
                </h3>
                <p className="text-dark/70 dark:text-light/70 text-base font-light flex-grow mb-4">
                  {activities.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Activities
