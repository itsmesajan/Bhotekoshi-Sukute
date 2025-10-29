import React, { useMemo } from "react";
import EnquiryModal from "./Contact/EnquiryModal";
import useFetchApi from "../hooks/useFetchApi";

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const HallSection = () => {
  const {
    data: raw,
    loading,
    error,
  } = useFetchApi("/bhotekoshibeach/api_hall.json", "hallFeatures");

  // Normalize API shape:
  // API can be: [ { title, hallCategories: [ { id, title, ... } ] } ]
  // or similar. We extract the first hall category object.
  const hall = useMemo(() => {
    if (!raw) return null;

    // raw is array wrapper: [ { ... } ]
    if (Array.isArray(raw)) {
      const first = raw[0];
      if (!first) return null;
      if (Array.isArray(first.hallCategories) && first.hallCategories.length > 0) {
        return first.hallCategories[0];
      }
      // maybe first is already the hall object
      return first;
    }

    // raw is object with hallCategories
    if (typeof raw === "object") {
      if (Array.isArray(raw.hallCategories) && raw.hallCategories.length > 0) {
        return raw.hallCategories[0];
      }
      return raw;
    }

    return null;
  }, [raw]);

  // Build features array from informations[0].data or fall back to hallAmenities
  const features = useMemo(() => {
    if (!hall) return [];
    if (!Array.isArray(hall.hallAmenities)) return [];
    // take at most 3 amenities and normalize shape { label, icon }
    return hall.hallAmenities.slice(0, 3).map((a) => ({
      label: a.title || a.name || "",
      icon: a.icon || null,
    }));
  }, [hall]);

  const heroImage =
    (hall?.image && Array.isArray(hall.image) && hall.image[0]?.src) ||
    (hall?.image && typeof hall.image === "string" && hall.image) ||
    "/assets/placeholder.jpg";

  if (loading) return <></>;
  if (error) return <div className="text-red-600">{String(error)}</div>;
  if (!hall) return <div className="text-center py-12">Hall data not available.</div>;

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden flex items-center justify-center text-white bg-gray-900 ">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${heroImage}')`,
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 container mx-auto p-4 sm:p-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          {hall.title}
        </h2>

        <p className="text-xl sm:text-lg font-light max-w-3xl mx-auto mb-10 drop-shadow-md">
          {hall.description}
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2 max-w-xs">
              <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
                {feature.icon || "check_circle"}
              </span>
              <span className="font-bold text-xl">{feature.value || feature.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <EnquiryModal type="hall" selectedItem={{ title: hall.title, id: hall.id }} />
        </div>
      </div>
    </section>
  );
};

export default HallSection;