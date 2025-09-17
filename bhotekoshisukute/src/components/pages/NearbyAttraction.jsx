// src/components/pages/NearbyAttraction.jsx
import React from 'react';

const attractions = [
  {
    name: 'Bhotekoshi River',
    description: 'Famous for white-water rafting and scenic beauty.',
    icon: 'fa-water',
  },
  {
    name: 'Sukute Beach',
    description: 'A popular riverside picnic and camping spot.',
    icon: 'fa-umbrella-beach',
  },
  {
    name: 'Dolalghat',
    description: 'Historic town known for its bridge and local fish.',
    icon: 'fa-fish',
  },
  {
    name: 'Jure Waterfall',
    description: 'A beautiful natural waterfall nearby.',
    icon: 'fa-water',
  },
];

const NearbyAttraction = () => (
  <section className="py-16 sm:py-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Nearby Attractions</h2>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Explore popular spots and natural wonders close to Sukute Resort.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {attractions.map((attraction, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col items-center text-center">
          <i className={`fa-solid ${attraction.icon} text-4xl text-[var(--primary-color)] mb-4`}></i>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{attraction.name}</h3>
          <p className="text-slate-600 text-sm">{attraction.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NearbyAttraction;
