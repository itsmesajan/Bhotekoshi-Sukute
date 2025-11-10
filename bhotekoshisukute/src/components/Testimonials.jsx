import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const { data: testimonials = [], loading, error } = useFetchApi(
    "https://www.bhotekoshibeachresort.com/api/api_testimonial.php",
    "testimonials"
  );

  const [expandedMap, setExpandedMap] = React.useState({});
  const toggleExpanded = (idx) => {
    setExpandedMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  return (
    <section className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Guest Experiences
        </h2>
      </div>

      {testimonials.length > 3 ? (
        <Swiper
        className="!pb-16"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isLong = (testimonial.content || '').length > 300;
            const isExpanded = !!expandedMap[index];
            return (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${testimonial.image}")` }}
                    ></div>
                    <div className="ml-4">
                      <p className="font-bold text-slate-800">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.source}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-lg ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'
                        }`}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  <div className="relative">
                    <div className={`text-slate-600 leading-relaxed ${isExpanded ? '' : 'max-h-[6.5rem] overflow-y-auto'}`}>
                      <p className="whitespace-pre-line">"{testimonial.content}"</p>
                    </div>

                    {!isExpanded && isLong && (
                      <div className="pointer-events-none absolute left-0 right-0 bottom-8 h-8 bg-gradient-to-t from-white/90 to-transparent"></div>
                    )}

                    {isLong && (
                      <div className="mt-2">
                        <button type="button" onClick={() => toggleExpanded(index)} className="text-sm text-[var(--primary-color)] font-medium">
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isLong = (testimonial.content || '').length > 300;
            const isExpanded = !!expandedMap[index];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${testimonial.image}")` }}
                  ></div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-800">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.source}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`material-symbols-outlined text-lg ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'
                      }`}
                    >
                      star
                    </span>
                  ))}
                </div>

                <div className="relative">
                  <div className={`text-slate-600 leading-relaxed ${isExpanded ? '' : 'max-h-[6.5rem] overflow-y-auto'}`}>
                    <p className="whitespace-pre-line">"{testimonial.content}"</p>
                  </div>

                  {!isExpanded && isLong && (
                    <div className="pointer-events-none absolute left-0 right-0 bottom-8 h-8 bg-gradient-to-t from-white/90 to-transparent"></div>
                  )}

                  {isLong && (
                    <div className="mt-2">
                      <button type="button" onClick={() => toggleExpanded(index)} className="text-sm text-[var(--primary-color)] font-medium">
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
