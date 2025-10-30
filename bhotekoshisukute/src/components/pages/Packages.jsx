import React from "react";
import EnquiryModal from "../Contact/EnquiryModal";
import useFetchApi from "../../hooks/useFetchApi";



const Packages = () => {
    const {
    data: packages,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_offers.php",
    "packages"
  );

    if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
          Privileged Offers
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 ">
          Explore our exclusive packages designed for an unforgettable experience at Sukute Resort. Whether you're looking for a family adventure, a corporate retreat, or a festive celebration, we have the perfect offer for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(packages).map(([key,pkg]) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              alt={pkg.title}
              src={pkg.image}
              className="w-full object-cover"
              style={{ height: "400px" }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {pkg.description}
              </p>
              <EnquiryModal
                type="package"
                selectedItem={{ id: key, title: pkg.title }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
