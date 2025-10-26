import React from "react";
// import aboutImg1 from "../../assets/about/about.webp";
// import aboutImg2 from "../../assets/about/about2.webp";

import useFetchApi from "../../hooks/useFetchApi";

const AboutTop = () => {
  const {
    data: aboutContent,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_homeArticle.php",
    "aboutContent"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Loading…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error loading About Us: {error}
      </div>
    );
  }

  if (!aboutContent) {
    return <div className="text-center py-12">About Us not found.</div>;
  }
  const { html } = aboutContent
  return (
    <>
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary-color)]">
              {aboutContent.subtitle}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 ">
              {aboutContent.subheading}
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          {/* <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--secondary-color)] font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary-color)] mt-2 mb-4">
                Crafting a Himalayan Haven
              </h2>
              <p className="text-lg leading-relaxed">
                Our journey began with a simple yet profound vision: to create a
                unique retreat in Sukute, tailored for domestic travelers. We
                envisioned a place that blends the thrill of adventure with the
                serenity of relaxation, a true home away from home where
                families and corporate teams can connect, unwind, and create
                lasting bonds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Children playing by the river"
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-square"
                src={aboutImg1}
              />
              <img
                alt="Family enjoying a meal outdoors"
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-square mt-8"
                src={aboutImg2}
              />
            </div>
          </div> */}
        </div>
      </section>

      <div className="video h-full lg:h-[35rem] overflow-hidden outline outline-1 outline-goldLight -outline-offset-[12px]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          id="backgroundVideo"
        >
          <source src={aboutContent.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default AboutTop;
