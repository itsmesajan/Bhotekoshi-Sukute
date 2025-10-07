import React from 'react';
import Sailung from '../assets/Sailungg.jpg';
import Bhairab from '../assets/Bhairab.jpg';
import Tatopani from '../assets/Tatopani.jpg';
import Kalinchok from '../assets/Kalinchok.jpg';
import Jugal from '../assets/Jugal.jpg';
import Hiking from '../assets/Hiking.jpg';
import Gaurati from '../assets/Gaurati.jpg';
import Bunzy from '../assets/Bunzy.jpg';

const places = [
    {
        title: "Bhairab Kunda",
        description: "A sacred lake and pilgrimage site surrounded by stunning Himalayan views.",
        imageUrl: Bhairab,
        mapUrl: "https://goo.gl/maps/4r8xwKj8n8v1QwKc9",
    },
    {
        title: "Tatopani",
        description: "Famous for its natural hot springs, perfect for relaxation and wellness.",
        imageUrl: Tatopani,
        mapUrl: "https://goo.gl/maps/2Qw2FQh8v9v1QwKc9",
    },
    {
        title: "Sailung",
        description: "Known for panoramic hilltop views and rolling green meadows.",
        imageUrl: Sailung,
        mapUrl: "https://goo.gl/maps/3r8xwKj8n8v1QwKc9",
    },
    {
        title: "Kalinchok",
        description: "A popular pilgrimage and trekking destination with breathtaking scenery.",
        imageUrl: Kalinchok,
        mapUrl: "https://goo.gl/maps/5r8xwKj8n8v1QwKc9",
    },
    {
        title: "Jugal Basecamp",
        description: "Gateway to the Jugal Himal range, ideal for trekkers and nature lovers.",
        imageUrl: Jugal,
        mapUrl: "https://goo.gl/maps/6r8xwKj8n8v1QwKc9",
    },
    {
        title: "Hiking MAJHI Village",
        description: "Experience local culture and scenic trails in the Majhi community village.",
        imageUrl: Hiking,
        mapUrl: "https://goo.gl/maps/7r8xwKj8n8v1QwKc9",
    },
    {
        title: "Gaurati Temple",
        description: "A revered temple offering spiritual ambiance and cultural heritage.",
        imageUrl: Gaurati,
        mapUrl: "https://goo.gl/maps/8r8xwKj8n8v1QwKc9",
    },
    {
        title: "Bunzy & More",
        description: "Enjoy thrilling bunzy jumping and other adventure activities nearby.",
        imageUrl: Bunzy,
        mapUrl: "https://goo.gl/maps/9r8xwKj8n8v1QwKc9",
    },
];

const PlacesToExploreSection = () => {
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