import React from 'react';
import useFetchApi from '../hooks/useFetchApi';

const PlacesToExploreSection = () => {

    const {
      data: places,
      loading,
      error,
    } = useFetchApi(
      "https://www.bhotekoshibeachresort.com/api/api_nearby.php",
      "places"
    );
      if (loading) return <></>;
  if (error) return <div>{error}</div>;

    return (
        <section className="py-16 sm:py-24 bg-[#ffcd0012]">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Places to Explore</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Explore the beautiful destinations and adventure spots near Bhotekoshi Beach.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {places.map((place, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-lg transition-shadow group">
                            <img
                                src={place.imageUrl}
                                alt={place.title}
                                className="rounded-xl mb-4 w-full h-32 object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                            />
                            <h3 className="font-bold text-lg text-slate-800 mb-2">{place.title}</h3>
                            <p className="text-slate-600 text-sm text-center mb-4">{place.description}</p>
                            <a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white font-bold px-4 py-2 rounded-full shadow hover:bg-[var(--green-color)] transition-all">
                                <span className="material-symbols-outlined text-lg">map</span>
                                Map
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlacesToExploreSection;