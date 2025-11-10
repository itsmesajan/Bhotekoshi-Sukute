import React, { useMemo } from "react";
import EnquiryModal from "./Contact/EnquiryModal";
import useFetchApi from "../hooks/useFetchApi";

// Note: The Icon component is no longer used, but kept for context.
const Icon = ({ name, className = "" }) => (
   <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const HallSection = () => {
   const {
     data: raw,
     loading,
     error,
   } = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_hall.php", "hallFeatures");

   // 🛠️ CORRECTION 1: Normalize API shape based on the 'accommodationContents' pattern.
   const hall = useMemo(() => {
     if (!raw || !Array.isArray(raw) || raw.length === 0) return null;

     const firstContent = raw[0];
     
     // Check for the highly nested 'accomodation' array (as seen in your data pattern)
     if (Array.isArray(firstContent.accomodation) && firstContent.accomodation.length > 0) {
        return firstContent.accomodation[0];
     }

     // Fallback to the top-level content object
     return firstContent;
   }, [raw]);

   // 🛠️ CORRECTION 2: Update useMemo to pass through 'imageUrl'
   const features = useMemo(() => {
     if (!hall) return [];
     
     // The hall amenities are under the 'amenities' key in your data pattern, 
     // not 'hallAmenities' as used in the original template. 
    // We'll use 'amenities' to match the data structure.
     const rawAmenities = hall.hallAmenities || hall.amenities; 
    
     if (!Array.isArray(rawAmenities)) return [];
    
     // Take at most 3 amenities and normalize shape { label, icon, imageUrl }
     return rawAmenities.slice(0, 3).map((a) => ({
        label: a.title || a.name || "",
        icon: a.icon || null,
        imageUrl: a.imageUrl || null, // ✨ PASSING THROUGH imageUrl
     }));
   }, [hall]);

   const heroImage = useMemo(() => {
     if (!hall) return "/assets/placeholder.jpg";
     // The primary hall image is typically hall.imageUrl
     return hall.imageUrl || (hall.images && hall.images[0]?.src) || "/assets/placeholder.jpg";
   }, [hall]);


   if (loading) return <></>;
   if (error) return <div className="text-red-600">{String(error)}</div>;
   if (!hall || !hall.title) return <div className="text-center py-12">Hall data not available.</div>;

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

          {/* 🌟 UPDATED FEATURES RENDERING SECTION */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
             {features.map((feature, index) => {
               const iconName = feature.icon;
               const hasImage = feature.imageUrl; // Check this first
               const isFontAwesome = iconName && iconName.startsWith("fa-");

               return (
                    <div key={index} className="flex flex-col items-center gap-2 max-w-xs">
                         {/* CONDITIONAL ICON/IMAGE LOGIC */}
                         {hasImage ? (
                              // 1. RENDER IMAGE
                              <img
                                   src={feature.imageUrl}
                                   alt={feature.label}
                                   className="w-8 h-8 object-contain"
                              />
                         ) : isFontAwesome ? (
                              // 2. RENDER FONT AWESOME ICON
                              <i
                                   className={`${iconName} text-4xl text-[var(--primary-color)]`}
                                   aria-hidden="true"
                              ></i>
                         ) : (
                              // 3. RENDER MATERIAL SYMBOLS (Default)
                              <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
                                   {iconName || "check_circle"}
                              </span>
                         )}

                         {/* ⚠️ The feature label is now 'label', not 'value' */}
                         <span className="font-bold text-xl">{feature.label}</span>
                    </div>
               );
             })}
          </div>

          <div className="flex justify-center">
             <EnquiryModal type="hall" selectedItem={{ title: hall.title, id: hall.id }} />
          </div>
        </div>
     </section>
   );
};

export default HallSection;