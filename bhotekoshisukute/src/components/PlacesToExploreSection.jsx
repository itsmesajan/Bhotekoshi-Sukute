import React from 'react';

const places = [
    {
        title: "Bhairab Kunda",
        description: "A sacred lake and pilgrimage site surrounded by stunning Himalayan views.",
        imageUrl: "https://whatthenepal.com/wp-content/uploads/2023/08/bhairab-kunda-trekking82.jpg",
        mapUrl: "https://goo.gl/maps/4r8xwKj8n8v1QwKc9",
    },
    {
        title: "Tatopani",
        description: "Famous for its natural hot springs, perfect for relaxation and wellness.",
        imageUrl: "https://muktinathdarshan.com.np/wp-content/uploads/2023/10/tatopani.jpg",
        mapUrl: "https://goo.gl/maps/2Qw2FQh8v9v1QwKc9",
    },
    {
        title: "Sailung",
        description: "Known for panoramic hilltop views and rolling green meadows.",
        imageUrl: "https://www.landnepal.com/wp-content/uploads/2020/05/Sailungg.jpg",
        mapUrl: "https://goo.gl/maps/3r8xwKj8n8v1QwKc9",
    },
    {
        title: "Kalinchok",
        description: "A popular pilgrimage and trekking destination with breathtaking scenery.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Kuri_Village.jpg",
        mapUrl: "https://goo.gl/maps/5r8xwKj8n8v1QwKc9",
    },
    {
        title: "Jugal Basecamp",
        description: "Gateway to the Jugal Himal range, ideal for trekkers and nature lovers.",
        imageUrl: "https://images.unsplash.com/photo-1645165052641-c4081bc9eb48?q=80&w=1168&auto=format&fit=crop",
        mapUrl: "https://goo.gl/maps/6r8xwKj8n8v1QwKc9",
    },
    {
        title: "Hiking MAJHI Village",
        description: "Experience local culture and scenic trails in the Majhi community village.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9X4jWyCXPNfO0ZcctalJXnrvA_TXdGwLAEw&s",
        mapUrl: "https://goo.gl/maps/7r8xwKj8n8v1QwKc9",
    },
    {
        title: "Gaurati Temple",
        description: "A revered temple offering spiritual ambiance and cultural heritage.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwfhPrbgJv95lzopzF3gjoDfVnDeBo4V6qg&s",
        mapUrl: "https://goo.gl/maps/8r8xwKj8n8v1QwKc9",
    },
    {
        title: "Bunzy & More",
        description: "Enjoy thrilling bunzy jumping and other adventure activities nearby.",
        imageUrl: "https://www.mountaindelights.com/public/uploads/Bhotekoshi%20Bungee%20Jumping.webp",
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