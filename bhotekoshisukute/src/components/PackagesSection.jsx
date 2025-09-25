import React from 'react';

const packages = [
    {
        title: "Family Fun Package",
        description: "2 nights stay, all meals, rafting & kids activities included.",
        price: "NPR 12,000",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        altText: "Family Fun Package",
    },
    {
        title: "Adventure Seeker",
        description: "1 night stay, rafting, canyoning, kayaking & bonfire night.",
        price: "NPR 8,500",
        imageUrl: "https://images.unsplash.com/photo-1637854087454-f0c80ab21999?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Adventure Seeker",
    },
    {
        title: "Corporate Retreat",
        description: "Conference facilities, team-building activities.",
        price: "NPR 15,000",
        imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
        altText: "Corporate Retreat",
    },
];

const PackagesSection = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Packages</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Choose from our curated packages for families, adventurers, and corporate groups.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col items-center"
                    >
                        <img src={pkg.imageUrl} alt={pkg.altText} className="rounded-xl mb-4 w-full h-64 object-cover shadow-md" />
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
                        <p className="text-slate-600 text-sm mb-4 text-center">{pkg.description}</p>
                        <div className="text-2xl font-extrabold text-[var(--secondary-color)] mb-2">{pkg.price}</div>
                        <button className="bg-[var(--primary-color)] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-600 transition-all">
                    <i className="fa-regular fa-paper-plane"></i>
                    Explore More
                </a>
            </div>
        </section>
    );
};

export default PackagesSection;