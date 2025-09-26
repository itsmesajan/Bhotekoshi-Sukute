
import React, { useState } from "react";
import { images } from "../../constants/data";

const categories = [
  { label: "All", value: "all" },
  { label: "Lobby", value: "lobby" },
  { label: "Room", value: "room" },
  { label: "Swimming Pool", value: "swimming" },
  { label: "Hall", value: "hall" },
  { label: "Dine", value: "dine" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  const openLightbox = (idx) => setLightbox({ open: true, index: idx });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const goto = (dir) => {
    setLightbox((prev) => {
      let newIdx = prev.index + dir;
      if (newIdx < 0) newIdx = filteredImages.length - 1;
      if (newIdx >= filteredImages.length) newIdx = 0;
      return { ...prev, index: newIdx };
    });
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
          Our Gallery
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-dark/70 dark:text-light/70 font-light">
          Explore the beauty and excitement of Sukute Resort through our curated collection of images.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`px-5 py-2 rounded-full border font-medium transition-all ${filter === cat.value ? "bg-[var(--primary-color)] text-white" : "bg-white text-[var(--secondary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="collage">
        {filteredImages.map((img, i) => (
          <div
            key={i}
            className={`collage-item ${img.className} cursor-pointer`}
            onClick={() => openLightbox(i)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>&times;</button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={() => goto(-1)}>&#8592;</button>
          <img
            src={filteredImages[lightbox.index].src}
            alt={filteredImages[lightbox.index].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg border-4 border-white"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={() => goto(1)}>&#8594;</button>
        </div>
      )}

      {/* Collage Styles */}
      <style jsx>{`
        .collage {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 250px;
          gap: 1rem;
        }
        .collage-item {
          overflow: hidden;
          border-radius: 0.5rem;
        }
        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .collage-item:hover img {
          transform: scale(1.05);
        }
        .item-1 {
          grid-column: span 4;
          grid-row: span 2;
        }
        .item-2 {
          grid-column: span 3;
          grid-row: span 1;
        }
        .item-3 {
          grid-column: span 5;
          grid-row: span 2;
        }
        .item-4 {
          grid-column: span 3;
          grid-row: span 1;
        }
        .item-5 {
          grid-column: span 4;
          grid-row: span 1;
        }
        .item-6 {
          grid-column: span 5;
          grid-row: span 1;
        }
        .item-7 {
          grid-column: span 3;
          grid-row: span 2;
        }
        .item-8 {
          grid-column: span 4;
          grid-row: span 1;
        }
        .item-9 {
          grid-column: span 5;
          grid-row: span 1;
        }
        .item-10 {
          grid-column: span 4;
          grid-row: span 1;
        }
        .item-11 {
          grid-column: span 3;
          grid-row: span 1;
        }
        .item-12 {
          grid-column: span 5;
          grid-row: span 2;
        }
        .item-13 {
          grid-column: span 4;
          grid-row: span 1;
        }
        .item-14 {
          grid-column: span 3;
          grid-row: span 1;
        }
        @media (max-width: 1024px) {
          .collage {
            grid-template-columns: repeat(6, 1fr);
            grid-auto-rows: 200px;
          }
          .collage-item {
            grid-column: span 3 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          .collage {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 150px;
          }
          .collage-item {
            grid-column: span 4 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
