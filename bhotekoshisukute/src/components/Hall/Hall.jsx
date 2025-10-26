import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import EnquiryModal from "../Contact/EnquiryModal";
import useFetchApi from "../../hooks/useFetchApi";

const Hall = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchApi(
    "/bhotekoshibeach/api_hall.json"
  );

  const [hall, setHall] = useState(null);

  useEffect(() => {
    if (!data) return;

    // JSON shape: data is an array whose first element has hallCategories
    const categories =
      Array.isArray(data) && data.length > 0
        ? data[0]?.hallCategories || []
        : (data && data.hallCategories) || [];

    // helper to slugify title/router parts
    const slugify = (str = "") =>
      String(str)
        .toLowerCase()
        .trim()
        .replace(/[#\s\/\\]+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-");

    // id param may be undefined when user visits /hall
    const param = id || null;

    // try to find by:
    // 1. exact id
    // 2. router hash (router: "/hall#sabha-hall") -> compare hash portion
    // 3. slugified title
    let found =
      categories.find((h) => param && h.id === param) ||
      categories.find((h) => {
        if (!param) return false;
        const routerHash = (h.router || "").split("#")[1];
        if (routerHash && routerHash === param) return true;
        if (slugify(h.title) === param) return true;
        return false;
      });

    // fallback: no id provided -> pick first hall (useful for single-hall sites)
    if (!found && !param && categories.length > 0) {
      found = categories[0];
    }

    if (!found) {
      setHall(null);
      return;
    }

    // Normalize images: JSON has image: [{ src, alt }, ...]
    const images =
      Array.isArray(found.image) && found.image.length
        ? found.image.map((it) => it.src || it.url).filter(Boolean)
        : found.images || found.imageUrls || found.image || [];

    // Normalize features: informations[0].data is an object of named entries
    let features = [];
    try {
      const info = Array.isArray(found.informations) ? found.informations[0] : null;
      const dataObj = info?.data || {};
      features = Object.entries(dataObj).map(([k, v]) => ({
        name: k,
        value: v.value || v,
      }));
    } catch (e) {
      features = found.features || [];
    }

    // Amenities
    const amenities =
      Array.isArray(found.hallAmenities) && found.hallAmenities.length
        ? found.hallAmenities.map((a) => ({ name: a.title || a.name, icon: a.icon }))
        : found.amenities || [];

    setHall({
      id: found.id,
      title: found.title,
      description: found.description,
      images,
      features,
      amenities,
      booking: found.booking,
    });
  }, [data, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Loading hall…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error loading hall: {error}
      </div>
    );
  }

  if (!hall) {
    return <div className="text-center py-12">Hall not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 pb-16 lg:pb-32">
      <main className="mx-auto w-full container flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Image Column */}
          <div className="md:col-span-3">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={hall.images && hall.images.length > 1}
              spaceBetween={10}
              className="h-[500px] w-full rounded-xl overflow-hidden"
            >
              {(hall.images && hall.images.length ? hall.images : ["/assets/placeholder.jpg"]).map(
                (img, index) => (
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
                )
              )}
            </Swiper>
          </div>

          {/* Content Column */}
          <div className="flex flex-col md:col-span-2">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[var(--secondary-color)]">
                {hall.title}
              </h2>
              <p className="mt-2 text-gray-600 whitespace-pre-line">
                {hall.description}
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                  Setup & Occupancy
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
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
              <EnquiryModal type="hall" selectedItem={{ title: hall.title }} />
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)]">Amenities</h3>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {hall.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--secondary-color)]">
                  {amenity.icon || ""}
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
