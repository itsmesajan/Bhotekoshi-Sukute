import React, { useMemo } from "react";
import EnquiryModal from "./Contact/EnquiryModal";
import useFetchApi from "../hooks/useFetchApi";

const HallSection = () => {
  const { data: raw, loading, error } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_hall.php",
    "hallFeatures"
  );

  // Extract the first hall object from API
  const hall = useMemo(() => {
    if (!raw) return null;

    // raw is an array of contents
    if (Array.isArray(raw)) {
      const firstContent = raw[0];
      if (!firstContent) return null;

      // Use accomodation array if available
      if (Array.isArray(firstContent.accomodation) && firstContent.accomodation.length > 0) {
        return firstContent.accomodation[0];
      }

      return firstContent;
    }

    return null;
  }, [raw]);

  // Get hero image (imageUrl preferred, fallback to first image in images array)
  const heroImage = useMemo(() => {
    if (!hall) return "/assets/placeholder.jpg";
    return hall.imageUrl || (hall.images && hall.images[0]?.src) || "/assets/placeholder.jpg";
  }, [hall]);

  // Extract first 3 amenities/features
  const features = useMemo(() => {
    if (!hall) return [];
    if (!Array.isArray(hall.hallAmenities)) return [];
    return hall.hallAmenities.slice(0, 3).map((a) => ({
      label: a.title || a.name || "",
      icon: a.icon || "check_circle",
    }));
  }, [hall]);

  if (loading) return <></>;
  if (error) return <div className="text-red-600">{String(error)}</div>;
  if (!hall) return <div className="text-center py-12">Hall data not available.</div>;

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden flex items-center justify-center text-white bg-gray-900">
      {/* Hero background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${heroImage}')`,
        }}
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto p-4 sm:p-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          {hall.title}
        </h2>

        <p className="text-xl sm:text-lg font-light max-w-3xl mx-auto mb-10 drop-shadow-md">
          {hall.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 max-w-xs"
            >
              {feature.type === "fa" ? (
                <i
                  className={`${feature.icon} text-4xl text-[var(--primary-color)]`}
                ></i>
              ) : (
                <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
                  {feature.icon}
                </span>
              )}
              <span className="font-bold text-xl">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Enquiry button */}
        <div className="flex justify-center">
          <EnquiryModal
            type="hall"
            selectedItem={{ title: hall.title, id: hall.id }}
          />
        </div>
      </div>
    </section>
  );
};

export default HallSection;
