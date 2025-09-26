import React from 'react';
import { halls } from '../../constants/data';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import EnquiryModal from '../Contact/EnquiryModal';

const Hall = () => {
  const hall = halls[0]; // grab the first hall since you only have one

  return (
    <div className="container mx-auto px-6 pb-16 lg:pb-32">
      <main className="mx-auto w-full container flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link
            className="text-gray-500 hover:text-primary dark:hover:text-primary"
            to="/roomList"
          >
            Halls
          </Link>
          <span className="text-gray-600">/</span>
          <span className="font-medium text-[var(--secondary-color)]">
            {hall.title}
          </span>
        </div>

        {/* Room Details Grid */}
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Image Column */}
          <div className="md:col-span-3">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={10}
              effect="fade"
              className="h-[500px] w-full rounded-xl overflow-hidden"
            >
              {hall.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      alt={`${hall.title} ${index + 1}`}
                      src={img}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content Column */}
          <div className="flex flex-col md:col-span-2">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[var(--secondary-color)]">
                {hall.title}
              </h2>
              <p className="mt-2 text-gray-600">{hall.description}</p>

              {/* Room Features */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                  Room Features
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  {hall.features.map((feature, index) => (
                    <div key={index}>
                      <p className="text-sm text-gray-500">{feature.name}</p>
                      <p className="text-base font-medium text-gray-800">
                        {feature.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <EnquiryModal />
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)]">
            Amenities
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {hall.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--secondary-color)]">
                  {amenity.icon}
                </span>
                <p className="text-base text-gray-700">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Hall;
