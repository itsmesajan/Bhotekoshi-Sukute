import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useFetchApi from "../../hooks/useFetchApi";
import ScrollToTopWithLenis from "../ui/ScrollToTopWithLenis";

const RestaurantPage = () => {
  const {
    data: restaurants,
    loading,
    error,
  } = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_dine.php", "restaurants");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  <ScrollToTopWithLenis />
  return (
    <main className="flex-grow bg-secondary dark:bg-dark/95">
      <div className="container mx-auto px-6 py-16 lg:py-32">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
            Exquisite Dining Moments
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Indulge your palate with our diverse culinary offerings, from
            riverside fine dining to casual poolside snacks. Each dish is a
            celebration of fresh, local ingredients.
          </p>
        </div>

        {/* Restaurant Sections */}
        <div className="space-y-16 overflow-hidden">
          {Object.entries(restaurants).map(([key, restaurant], index) => (
            <div
              key={key}
              className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Swiper */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl md:w-1/2">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-96"
                >
                  {restaurant.imageUrls?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="w-full h-96 object-cover bg-center bg-transparent"
                        style={{ backgroundImage: `url(${img.src})` }}
                        alt={img.alt}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="flex flex-col md:w-1/2">
                <h3 className="text-3xl font-display font-bold text-[var(--secondary-color)] dark:text-light mb-3">
                  {restaurant.title}
                </h3>

                <p
                  className="text-dark/70 dark:text-light/70 text-base font-light flex-grow mb-4"
                  dangerouslySetInnerHTML={{ __html: restaurant.description }}
                ></p>

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-dark/80 dark:text-light/80 mb-6">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-[var(--secondary-color)]"></i>
                    <span>
                      Open: {restaurant.openingTime} – {restaurant.closingTime}
                    </span>
                  </div>

                  {/* <div className="flex items-center gap-2">
                    <i className="fas fa-user-friends text-[var(--secondary-color)]"></i>
                    <span>Capacity: {restaurant.occupancy}</span>
                  </div> */}

                  <div className="flex items-center gap-2">
                    <i className="fas fa-utensils text-[var(--secondary-color)]"></i>
                    <span>Cuisine: {restaurant.type}</span>
                  </div>
                </div>

                <a
                  className="inline-block bg-[var(--primary-color)] text-[var(--secondary-color)] hover:text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[var(--green-color)] transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                  href="tel:981234567"
                >
                  <i class="fas fa-phone mr-2"></i>
                   Make a Reservation
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RestaurantPage;
