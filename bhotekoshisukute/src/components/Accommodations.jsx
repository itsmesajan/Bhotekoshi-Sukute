import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tree2 from "../assets/tree_2.png";
import tree1 from "../assets/tree.png";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const AccommodationsSection = () => {
  const {
    data: accommodations,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_room.php",
    "accommodations"
  );

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  let rooms = [];
    if (Array.isArray(accommodations) && accommodations.length > 0) {
        // Accessing the nested array: accommodations[0]?.accomodation
        rooms = accommodations[0]?.accomodation || [];
    } else if (accommodations && accommodations.accomodation) {
        // Fallback for non-array top-level data
        rooms = accommodations.accomodation;
    }

  if (!Array.isArray(rooms) || rooms.length === 0) {
    return (
        <section className="py-16 sm:py-24 relative text-center">
            <p className="text-xl text-red-500">No accommodations found or failed to load data.</p>
        </section>
    );
}

if (accommodations.length < 7) {
    rooms = [...rooms, ...rooms];
}
  return (
    <>
      {/* Decorative images */}
      <img
        src={tree2}
        alt="decorative tree"
        className="absolute left-0 w-32 sm:w-64 opacity-10 pointer-events-none select-none"
      />
      <img
        src={tree1}
        alt="decorative tree"
        className="absolute right-0 w-32 sm:w-64 opacity-10 pointer-events-none select-none"
      />

      <section className="py-16 sm:py-24 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Accommodations
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Choose from our comfortable rooms designed for relaxation and
            convenience.
          </p>
        </div>
        <Swiper
          className="accommodations-swiper !pb-12"
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          // Auto-slide every 5 seconds
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // optional: adjust transition speed (ms)
          // speed={800}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true }}
        >
          {rooms.map((room, index) => (
            <SwiperSlide
              key={`${room.title}-${index}`}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300"
            >
              <img
                src={room.imageUrl}
                alt={room.title}
                className="rounded-xl mb-6 w-full h-64 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {room.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 text-center">
                {room.subtitle}
              </p>
              <div className="text-lg font-extrabold text-[var(--secondary-color)] mb-2">
                {room.roomDetails?.["Starting Price"]?.value}
              </div>
              <Link
                to={room.roomrojai}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base text-center font-bold text-[var(--secondary-color)] hover:text-white transition-all hover:bg-[var(--green-color)]"
              >
                Book Now
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className="text-center mt-8">
          <Link
            to="/accommodation"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-600 transition-all"
          >
            <i className="fa-regular fa-paper-plane"></i>
            Explore More
          </Link>
        </div>
      </section>
    </>
  );
};

export default AccommodationsSection;
