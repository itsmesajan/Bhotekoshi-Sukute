import React from 'react';
import useFetchApi from '../hooks/useFetchApi';
import { Link } from 'react-router-dom';

const USPSection = () => {
      const {
    data: facilities,
    loading,
    error,
  } = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_homeFacilities.php", "facilities");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

    return (
        <section className="py-16 sm:py-24 bg-[#ffcd0012] ">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Our Best USPs</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Discover what makes Bhotekoshi Beach truly unique and memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(facilities).map(([key, facility]) => (
            <div
              key={key}
              className="bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-[#ffcd0012] text-4xl text-[var(--green-color)] p-4 rounded-full mb-4 flex items-center justify-center">
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
              <h3 className="text-lg font-bold text-slate-800">
                {facility.title || key}
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                {facility.description}
              </p>
            </div>
          ))}

          <Link
          to="/facilities"
              className="bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-[#ffcd0012] text-4xl text-[var(--green-color)] p-4 rounded-full mb-4 flex items-center justify-center">
                <i className="fa-solid fa-circle-ellipsis"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Many More
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                Explore more unique experiences at Bhotekoshi Beach
              </p>
            </Link>
        </div>
            </div>
        </section>
    );
};

export default USPSection;