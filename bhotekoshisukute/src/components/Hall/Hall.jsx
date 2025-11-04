import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Assuming these are local imports
import EnquiryModal from "../Contact/EnquiryModal";
import useFetchApi from "../../hooks/useFetchApi"; 

const Hall = () => {
    const { id } = useParams();

    // 1. Fetching the data using the custom hook
    const { data: apiResponse, loading, error } = useFetchApi(
        "https://mayurstay.com/bhotekoshi/api/api_hall.php"
    );

    // Local state to hold the normalized hall data
    const [hall, setHall] = useState(null);

    // 2. Data Normalization useEffect
    useEffect(() => {
        // Ensure API response is available and is an array with content
        if (!apiResponse || !Array.isArray(apiResponse) || apiResponse.length === 0) {
            setHall(null);
            return;
        }

        // --- Core Extraction Logic ---
        
        // Find the main accommodation entry (assuming the API returns a structure like the one provided)
        const mainContent = apiResponse[0];

        // The target hall details are inside the 'accomodation' array
        const allHalls = mainContent?.accomodation || [];

        // 3. Finding the specific hall based on the URL parameter (id)
        
        // Helper to slugify a string
        const slugify = (str = "") =>
            String(str).toLowerCase().trim().replace(/[#\s\/\\]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");

        let foundHallData = null;
        const param = id || null;

        if (param) {
            // Try to match by 'id' or slugified 'category'
            foundHallData = allHalls.find(
                (h) => h.id === param || slugify(h.category) === param
            );
        }

        // Fallback: If no ID is provided, or ID match fails, use the first hall in the array
        if (!foundHallData && allHalls.length > 0) {
            foundHallData = allHalls[0];
        }

        if (!foundHallData) {
            setHall(null);
            return;
        }

        // --- Data Normalization to fit Component Structure ---
        
        // Normalize Images: Map to an array of src URLs
        const images = (foundHallData.images || []).map(img => img.src).filter(Boolean);

        // Normalize Features: Convert the 'roomDetails' object into an array of {name, value} objects
        // The roomDetails object is in the format: {"U shape": {icon: "...", value: "300 pax"}, ...}
        const features = Object.entries(foundHallData.roomDetails || {}).map(([name, data]) => ({
            name: name,
            value: data?.value || data, // data.value for complex object, or data for simple value
            icon: data?.icon || null
        }));
        
        // Note: Amenities are empty in the provided JSON, but the structure is {title: ..., content: []}
        const amenities = foundHallData.amenities || []; // Keep as is if API returns an array of amenity objects

        // Normalize Overview/Description: Extract content from the overview array
        const descriptionContent = foundHallData.overview?.[0]?.content || foundHallData.description || "No description available.";
        
        // 4. Set Normalized State
        setHall({
            id: foundHallData.id,
            title: foundHallData.title,
            // Use the extracted HTML content from overview/description
            description: descriptionContent, 
            images: images,
            features: features, // Holds the room setup details
            amenities: amenities,
        });

    }, [apiResponse, id]); // Re-run when API data or URL ID changes
    
    // --- Render Logic (Unchanged) ---

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
                {(hall.images && hall.images.length
                  ? hall.images
                  : ["/assets/placeholder.jpg"]
                ).map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <img
                        alt={`${hall.title} ${index + 1}`}
                        // 🛑 Using 'img' directly as it is now a URL string
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
                {/* 🛑 Using dangerouslySetInnerHTML to render HTML from the description */}
                <div
                  className="mt-2 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: hall.description }}
                />

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                    Setup & Occupancy
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                    {/* Features are now derived from roomDetails */}
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
                <EnquiryModal
                  type="hall"
                  selectedItem={{ title: hall.title }}
                />
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[var(--secondary-color)]">
              Amenities
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
              {/* Amenities section remains as is, assuming 'hall.amenities' is an array of {name, icon} */}
              {(hall.amenities || []).map((amenity, index) => {
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
        </main>
      </div>
    );
};

export default Hall;