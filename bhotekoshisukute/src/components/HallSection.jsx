import React from 'react';

const hallFeatures = [
    {
        icon: 'aspect_ratio',
        value: '1000 SQF',
        label: 'Total Area',
    },
    {
        icon: 'groups',
        value: '70 Guests',
        label: 'Max Capacity',
    },
    {
        icon: 'wifi',
        value: 'High-Speed WiFi',
        label: 'Included',
    },
];

const HallSection = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden flex items-center justify-center text-white bg-gray-900">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqH0BDNbcTaUpV86MsPs3EHghHCKP7igPu_xvw_Qn4zbOCFd9EE2G4H1-5QmeBnqBUqPlUpkwutoZ3YEihmoftjSFlZ5YzejMWb0Clc3sVzMNxzT2cXtrUWzgrx1r6ZaMoNvMwU=s1360-w1360-h1020-rw')",
                }}
                aria-hidden="true"
            ></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                    The Grand Events Hall
                </h2>

                <p className="text-xl sm:text-lg font-light max-w-3xl mx-auto mb-10 drop-shadow-md">
                    The ideal venue for "corporate conferences, workshops, and private celebrations", equipped with
                    cutting-edge technology and flexible seating.
                </p>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
                    {hallFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-[var(--primary-color)]">
                                {feature.icon}
                            </span>
                            <span className="font-bold text-xl">{feature.value}</span>
                            <span className="text-gray-300">{feature.label}</span>
                        </div>
                    ))}
                </div>

                <button
                    aria-label="Inquire about booking the Hall"
                    className="bg-[var(--primary-color)] transition-colors 
                               text-white font-semibold py-4 px-12 rounded-full shadow-2xl 
                               transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                    Inquire Now
                </button>
            </div>
        </section>
    );
};

export default HallSection;