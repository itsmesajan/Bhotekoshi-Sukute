import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

// const popup = [
//   {
//     id: 1,
//     type: "image",
//     sliders: [
//       {
//         src: "https://hotelichchha.com/assets/ichchha1-CmqxPbFg.webp",
//         title: "This is an image",
//         link: "https://example.com",
//         description: "",
//         link: "#",
//       },
//       {
//         src: "https://hotelichchha.com/backend/images/slideshow/Yhdru-slider1-CGu9mUuv.webp",
//         title: "This is an image",
//         link: "https://example.com",
//         description: "",
//         link: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     type: "video",
//     sliders: [
//       {
//         src: "https://www.youtube.com/embed/R_Fhk2a4uII",
//         title: "This is a video",
//         link: "https://example.com",
//         description: "",
//         link: "#",
//       },
//     ],
//   },
// ];

const Popup = () => {
  const {
    data: popup = [],
    loading,
    error,
  } = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_popup.php", "popup");

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("isPopupShown");
    if (!isPopupShown) {
      setIsOpen(true);
      sessionStorage.setItem("isPopupShown", "true");
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("isPopupShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const closePopup = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= popup.length - 1) {
      setIsOpen(false);
    }
  };

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      {popup.length > 0 && (
        <>
          {isOpen && currentIndex < popup.length && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
              onClick={closePopup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className="relative mx-auto aspect-square h-auto w-[90%] overflow-hidden bg-white p-0 shadow-lg sm:w-4/5 xl:h-4/5 xl:w-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className="absolute right-2 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 p-1 text-xl text-white"
                  onClick={closePopup}
                >
                  &#x2715;
                </button>
                <Swiper
                  modules={[Navigation, Autoplay, EffectFade]}
                  navigation={
                    popup[currentIndex].sliders.length > 1
                      ? {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }
                      : false
                  }
                  autoplay={{ delay: currentIndex === 0 ? 0 : 3000 }}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={2000}
                  loop={popup[currentIndex].sliders.length > 1}
                >
                  {popup[currentIndex].sliders.map((content, index) => (
                    <SwiperSlide key={index}>
                      {popup[currentIndex].type === "image" ? (
                        <Link
                          to={content.link}
                          className="flex flex-col items-center"
                          target="_blank"
                        >
                          <img
                            src={content.src}
                            alt={content.alt}
                            className="aspect-square size-full object-cover shadow"
                          />
                        </Link>
                      ) : (
                        <div className="flex flex-col items-center">
                          <iframe
                            src={`${content.src}?autoplay=1&mute=1`}
                            title={content.alt}
                            className="aspect-square size-full object-cover shadow"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {popup[currentIndex].sliders.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="swiper-button- prev bg-black/40 backdrop-blur-sm text-white absolute left-0 top-1/2 z-10 m-2 size-10 rounded-full text-2xl -translate-y-1/2 transform cursor-pointer flex items-center justify-center"
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      className="swiper-button- next bg-black/40 backdrop-blur-sm text-white absolute right-0 top-1/2 z-10 m-2 size-10 rounded-full text-2xl -translate-y-1/2 transform cursor-pointer flex items-center justify-center"
                    >
                      &rarr;
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Popup;
