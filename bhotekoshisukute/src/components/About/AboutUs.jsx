import React from "react";
import video from '../../assets/about/intro.mp4';
import aboutImg1 from "../../assets/about/about.webp";
import aboutImg2 from "../../assets/about/about2.webp";
import aboutImg3 from "../../assets/about/about3.webp";
import { Link } from "react-router-dom";

const AboutUs = () => (
  <main className="flex-grow">
    {/* About Section */}
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary-color)]">
            Bhotekoshi Beach Resort: A Nature Escape
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 ">
            The riverside haven combines natural beauty with modern amenities, making it an ideal destination for both relaxation and adventure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              serenity of relaxation, a true home away from home where families
              and corporate teams can connect, unwind, and create lasting bonds.
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
        </div>
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
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Why Bhotekoshi Beach Resort Stands Out */}
    <section className="bg-gray-100 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary-color)]">
          Why Bhotekoshi Beach Resort Stands Out
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We've meticulously designed every aspect of our resort to offer an
          unparalleled experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-[#fece0442] w-16 h-16 items-center flex text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <span className="material-symbols-outlined !text-4xl">
                family_restroom
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">
              Family-Friendly Environment
            </h3>
            <p>
              From spacious rooms to engaging activities for all ages, we ensure
              every family member has a memorable stay.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#fece0442] w-16 h-16 items-center flex text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <span className="material-symbols-outlined !text-4xl">
                business_center
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">
              Professional Management
            </h3>
            <p>
              Our experienced team provides seamless service, whether for a
              family vacation or a corporate retreat.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#fece0442] w-16 h-16 items-center flex text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <span className="material-symbols-outlined !text-4xl">
                location_on
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">
              Prime Location
            </h3>
            <p>
              Easily accessible and nestled by the Bhotekoshi river, offering
              both convenience and natural beauty.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Beyond a Vacation Section */}
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              alt="Corporate meeting setup"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              src={aboutImg3}
            />
          </div>
          <div className="md:order-first">
            <span className="text-[var(--secondary-color)] font-semibold uppercase tracking-wider">
              For Everyone
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary-color)] mt-2 mb-4">
              Beyond a Vacation
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Bhotekoshi Beach Resort is more than just a place to stay; it's a destination
              for connection. We cater to corporate groups with our
              professionally managed facilities, ideal for team-building,
              seminars, and off-site meetings. Our versatile spaces and
              dedicated services ensure a productive and refreshing experience
              for your team.
            </p>
            <Link
              className="px-6 py-3 bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold rounded-full shadow-lg hover:bg-[var(--primary-color)]/90 transition-all inline-flex items-center gap-2"
              to="/contact"
            >
              Plan Your Event{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AboutUs;
