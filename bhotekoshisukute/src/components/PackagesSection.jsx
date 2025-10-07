import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../constants/data';
import EnquiryModal from './Contact/EnquiryModal';

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
            <div className="text-center mt-8">
                <Link to="/packages" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-600 transition-all">
                    <i className="fa-regular fa-paper-plane"></i>
                    Explore More
                </Link>
            </div>
        </section>
    );
};

export default PackagesSection;