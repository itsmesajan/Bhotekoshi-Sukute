import React from "react";
import useFetchApi from "../hooks/useFetchApi";

const InstagramWall = () => {
  const { data: instagramData, loading, error } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_instagram.php",
    "instagramImages"
  );

  if (loading) return null;
  if (error) return <div>{error}</div>;
  if (!instagramData?.data || instagramData.data.length === 0)
    return <p className="text-center py-20">No images available.</p>;

  // Only take images, ignore videos/reels
  const instagramImages = instagramData.data
    .filter((item) => item.media_type === "IMAGE")
    .slice(0, 16);

  if (instagramImages.length === 0)
    return <p className="text-center py-20">No images available.</p>;

  return (
    <section className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          #Instagram Wall
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          A glimpse of unforgettable moments and scenic beauty at Bhotekoshi Beach.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {instagramImages.map((image, index) => (
          <div key={index} className="relative group w-full overflow-hidden rounded-xl">
            <img
              className="w-full aspect-square object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              src={image.media_url}
              alt={image.caption || "Instagram post"}
            />
            <a
              href={image.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <i className="fab fa-instagram text-white text-3xl"></i>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.instagram.com/bhotekoshiheliresort/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-pink-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition-all"
        >
          <i className="fab fa-instagram text-xl"></i>
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramWall;
