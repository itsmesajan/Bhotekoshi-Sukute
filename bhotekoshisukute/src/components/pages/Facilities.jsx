import React from "react";
import { FaSwimmingPool, FaUtensils, FaCocktail, FaCoffee, FaBed, FaDoorOpen, FaParking, FaTree } from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    {
      icon: <FaSwimmingPool />,
      title: "Swimming Pool",
      description: "Refreshing pool for a relaxing swim or fun with family.",
    },
    {
      icon: <FaUtensils />,
      title: "Restaurant",
      description: "Savor delicious cuisines in our elegant restaurant.",
    },
    {
      icon: <FaCocktail />,
      title: "Bar",
      description: "Unwind with your favorite drinks in our cozy bar.",
    },
    {
      icon: <FaCoffee />,
      title: "Coffee Shop",
      description: "Enjoy fresh coffee and light snacks in our charming cafe.",
    },
    {
      icon: <FaBed />,
      title: "Rooms",
      description: "Experience comfort and luxury in our well-appointed rooms.",
    },
    {
      icon: <FaDoorOpen />,
      title: "Event Hall",
      description: "Host events in our spacious hall for any occasion.",
    },
    {
      icon: <FaParking />,
      title: "Parking",
      description: "Ample and secure parking for your peace of mind.",
    },
    {
      icon: <FaTree />,
      title: "Lawn Party Area",
      description: "Celebrate in style in our expansive lawn party area.",
    },
  ];

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
            Inside the Resort
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Explore the wide range of amenities we offer to make your stay unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-[#ffcd0012)] text-4xl text-[var(--secondary-color)] p-4 rounded-full mb-4 flex items-center justify-center">
                {facility.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                {facility.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Facilities;
