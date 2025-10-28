import React from "react";
import useFetchApi from "../../hooks/useFetchApi";

const Facilities = () => {
  const {
    data: facilities,
    loading,
    error,
  } = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_facilities.php", "facilities");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
            Inside the Resort
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Explore the wide range of amenities we offer to make your stay
            unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(facilities).map(([key, facility]) => (
            <div
              key={key}
              className="bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-[#ffcd0012] text-4xl text-[var(--secondary-color)] p-4 rounded-full mb-4 flex items-center justify-center">
                {facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <i className={facility.icon} />
                )}
              </div>
              <h3 className="text-lg font-bold text-[var(--secondary-color)]">
                {facility.title || key}
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
