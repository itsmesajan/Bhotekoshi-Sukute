import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { rooms } from "../../constants/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const RoomDetail = () => {
  const { id } = useParams(); // get room id from URL
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    const timeout = setTimeout(() => {
      const foundRoom = rooms.find((r) => r.id === id);
      setRoom(foundRoom);
      setLoading(false);
    }, 500); // simulate 0.5s delay

    return () => clearTimeout(timeout);
  }, [id]);


   if (loading) {
    // Skeleton / Loading Placeholder
    return (
      <div className="flex justify-center items-center h-screen bg-background-light dark:bg-background-dark">
        <div className="animate-pulse w-full max-w-5xl px-4 py-8">
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl mb-6"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!room) {
    return <div className="text-center py-20">Room not found.</div>;
  }

  const otherRooms = rooms.filter((r) => r.id !== room.id);

  return (
    <div className="container mx-auto px-6 pb-16 lg:pb-32">
      <main className="mx-auto w-full container flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link
            className="text-gray-500 hover:text-primary dark:hover:text-primary"
            to="/roomList"
          >
            Rooms
          </Link>
          <span className="text-gray-600">/</span>
          <span className="font-medium text-[var(--secondary-color)]">
            {room.title}
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
              {room.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      alt={`${room.title} ${index + 1}`}
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
                {room.title}
              </h2>
              <p className="mt-2 text-gray-600">{room.description}</p>

              {/* Room Features */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                  Room Features
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  {room.features.map((feature, index) => (
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
              <button className="w-full rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base font-bold text-[var(--secondary-color)] hover:text-white  transition-all hover:bg-[var(--green-color)]">
                Book {room.title}
              </button>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)]">
            Amenities
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {room.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--secondary-color)]">
                  {amenity.icon}
                </span>
                <p className="text-base text-gray-700">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Rooms Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)] text-center">
            Explore Other Rooms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {otherRooms.map((otherRoom) => (
              <div
                key={otherRoom.id}
                className="flex flex-col bg-light dark:bg-dark rounded-xl overflow-hidden shadow-md transition-shadow duration-500 hover:shadow-primary/20 group"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${otherRoom.imageUrl})` }}
                  ></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <Link
                  to={`/rooms/${otherRoom.id}`}
                  className="text-xl font-display font-bold text-[var(--secondary-color)] dark:text-light mb-2">
                    {otherRoom.title}
                  </Link>
                  <p className="text-dark/70 dark:text-light/70 text-sm font-light flex-grow mb-4">
                    {otherRoom.description.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-display font-bold text-[var(--secondary-color)]">
                      NPR {otherRoom.price} / night
                    </span>
                    <Link
                      to={`/rooms/${otherRoom.id}`}
                      className="text-[var(--secondary-color)] font-bold hover:underline text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomDetail;
