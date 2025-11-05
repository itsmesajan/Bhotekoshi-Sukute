import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ScrollToTopWithLenis from "../ui/ScrollToTopWithLenis";
import useLenisScroll from "../../hooks/useLenisScroll";

const RoomDetail = () => {
  const { id } = useParams();
      const {
    data,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_room.php",
    "packages"
  );


  const [room, setRoom] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);

  const lenis = useLenisScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [id, lenis]);

  useEffect(() => {
    if (loading) return;
    setLocalLoading(true);

    // Normalize data -> find accomodation array inside json
    let roomsArray = [];
    if (Array.isArray(data)) {
      // some responses wrap accomodation in first element
      const first = data[0];
      if (first && Array.isArray(first.accomodation)) {
        roomsArray = first.accomodation;
      } else {
        // try flatten: collect any accomodation arrays
        data.forEach((d) => {
          if (d && Array.isArray(d.accomodation)) roomsArray.push(...d.accomodation);
        });
      }
    } else if (data && Array.isArray(data.accomodation)) {
      roomsArray = data.accomodation;
    }

    // fallback: if nothing found but data looks like accomodation array itself
    if (!roomsArray.length && Array.isArray(data)) {
      roomsArray = data;
    }

    // find by id
    const found =
      roomsArray.find((r) => r.id === id) ||
      roomsArray.find((r) => (r.router || "").endsWith(id)) ||
      roomsArray.find((r) => r.title?.toLowerCase().includes((id || "").toLowerCase()));



    if (found) {
      // normalize images to array of src strings
      const imgs =
        (found.images &&
          Array.isArray(found.images) &&
          found.images.map((it) => (typeof it === "string" ? it : it.src || it.url)).filter(Boolean)) ||
        (found.imageUrl ? [found.imageUrl] : []);

      setRoom({ ...found, images: imgs });
    } else {
      setRoom(null);
    }

    setLocalLoading(false);
  }, [data, loading, id]);

  if (loading || localLoading) {
    <ScrollToTopWithLenis />
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

  if (error) {
    return <div className="text-center py-20 text-red-600">Error: {error}</div>;
  }

  if (!room) {
    return <div className="text-center py-20">Room not found.</div>;
  }

  const otherRooms = (() => {
    const first = Array.isArray(data) ? data[0] : data;
    const all = (first && Array.isArray(first.accomodation) ? first.accomodation : Array.isArray(data) ? data : []);
    return all.filter((r) => r.id !== room.id).slice(0, 6);
  })();

  

  return (
    <div className="container mx-auto px-6 pb-16 lg:pb-32">
      <main className="mx-auto w-full container flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link
            className="text-gray-500 hover:text-primary"
            to="/accommodation"
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
              loop={room.images && room.images.length > 1}
              spaceBetween={10}
              className="h-[500px] w-full rounded-xl overflow-hidden"
            >
              {(room.images && room.images.length
                ? room.images
                : [room.imageUrl || ""]
              ).map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      alt={`${room.title} ${index + 1}`}
                      src={imgSrc}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              <p
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: room.description }}
              ></p>

              {/* Room Features */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                  Room Features
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  {(room.roomDetails
                    ? Object.entries(room.roomDetails).map(([k, v]) => ({
                        name: k,
                        value: v.value,
                      }))
                    : room.overview && room.overview.length
                    ? [
                        {
                          name: "Overview",
                          value:
                            (room.overview[0] && room.overview[0].content) ||
                            "",
                        },
                      ]
                    : []
                  ).map((feature, index) => (
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
              <Link
                to={room.roomrojai}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base text-center font-bold text-[var(--secondary-color)] hover:text-white transition-all hover:bg-[var(--green-color)]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)]">
            Amenities
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {(room.amenities || []).map((amenity, index) => {
              // 1. Determine if the amenity uses a Font Awesome icon or a Material Symbol
              // We check if the 'icon' property exists and starts with 'fa-'
              const isFontAwesome =
                amenity.icon && amenity.icon.startsWith("fa-");

              // 2. Check if the amenity uses a direct image URL
              const hasImage = amenity.imageUrl;

              return (
                <div key={index} className="flex items-center gap-3">
                  {hasImage ? (
                    // --- RENDER IMAGE ---
                    <img
                      src={amenity.imageUrl}
                      alt={amenity.title}
                      // Apply appropriate sizing/styling for the amenity icon slot
                      className="w-5 h-5 object-contain"
                    />
                  ) : isFontAwesome ? (
                    // --- RENDER FONT AWESOME ICON ---
                    <i
                      className={`${amenity.icon} text-[var(--secondary-color)] text-xl`}
                    ></i>
                  ) : (
                    // --- RENDER MATERIAL SYMBOL ICON (Default/Fallback) ---
                    <span className="material-symbols-outlined text-[var(--secondary-color)] text-xl">
                      {/* Use the icon name, or a generic placeholder if the name is empty */}
                      {amenity.icon || "info"}
                    </span>
                  )}
                  <p className="text-base text-gray-700">{amenity.title}</p>
                </div>
              );
            })}
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
                className="flex flex-col bg-light rounded-xl overflow-hidden shadow-md transition-shadow duration-500 hover:shadow-primary/20 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      otherRoom.imageUrl ||
                      (otherRoom.images &&
                        otherRoom.images[0] &&
                        otherRoom.images[0].src)
                    }
                    alt={otherRoom.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <Link
                    to={`/accommodation/${otherRoom.id}`}
                    className="text-xl font-display font-bold text-[var(--secondary-color)] mb-2"
                  >
                    {otherRoom.title}
                  </Link>
                  <p className="text-dark/70 text-sm font-light flex-grow mb-4">
                    {(otherRoom.subtitle || "").substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-display font-bold text-[var(--secondary-color)]">
                      {otherRoom.roomDetails?.["Starting Price"]?.value ||
                        otherRoom.price ||
                        "N/A"}
                    </span>
                    <Link
                      to={`/accommodation/${otherRoom.id}`}
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
