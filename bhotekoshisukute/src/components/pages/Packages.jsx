import React from "react";
import { packages } from "../../constants/data";
import EnquiryModal from "../Contact/EnquiryModal";



const Packages = () => {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
          Privileged Offers
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-dark/70 dark:text-light/70 font-light">
          Explore our exclusive packages designed for an unforgettable experience at Sukute Resort. Whether you're looking for a family adventure, a corporate retreat, or a festive celebration, we have the perfect offer for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              alt={pkg.title}
              src={pkg.image}
              className="w-full object-cover"
              style={{ height: "400px" }} // Adjust for Facebook-like post preview
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {pkg.description}
              </p>
              <div className="mb-4">
                <p className="text-2xl font-extrabold text-[var(--secondary-color)]">
                  NPR {pkg.price}
                </p>
                <p className="text-sm text-[var(--secondary-color)]">
                  per person / night
                </p>
              </div>
              <EnquiryModal type="package" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
