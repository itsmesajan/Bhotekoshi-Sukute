import React, { useState } from "react";
import useFetchApi from "../../hooks/useFetchApi";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

const Gallery = () => {
    const {
    data: galleryImages,
    loading,
    error,
  } = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_gallery.php", "galleryImages");
  
   const [activeCategory, setActiveCategory] = useState("All");
   const [isTransitioning, setIsTransitioning] = useState(false);

  if (loading) return <></>;
  if (error) return <div>{error}</div>;
  if (!galleryImages || galleryImages.length === 0) return <p className="text-center py-20">No images available.</p>;

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

 const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => setIsTransitioning(false), 200);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
          Live Memories
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Explore the beauty and excitement of Sukute Resort through our curated
          collection of images.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border font-medium transition-all ${
              activeCategory  === cat
                ? "bg-[var(--primary-color)] text-white"
                : "bg-white text-[var(--secondary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightGallery
  plugins={[lgZoom, lgThumbnail, lgVideo, lgFullscreen]}
  mode="lg-fade"
  elementClassNames={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-transform ${isTransitioning ? "scale-95" : "scale-100"}`}
  options={{
    thumbnail: true,
    autoplay: true,
    appendToBody: true, // <-- This ensures modal is outside normal flow
  }}
>
  {filteredImages.map((img) => (
    <div
      key={img.id}
      className="overflow-hidden rounded-lg cursor-pointer group"
      data-src={img.url}
      data-sub-html={img.alt}
    >
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-lg"
        loading="lazy"
      />
    </div>
  ))}
</LightGallery>

      {/* Collage CSS (Optional: adjust for grid spans) */}
      {/* <style jsx>{`
        .collage-item {
          grid-column: span 2;
          grid-row: span 1;
        }
        @media (max-width: 1024px) {
          .collage-item {
            grid-column: span 3 !important;
          }
        }
        @media (max-width: 768px) {
          .collage-item {
            grid-column: span 4 !important;
          }
        }
      `}</style> */}
    </main>
  );
};

export default Gallery;
