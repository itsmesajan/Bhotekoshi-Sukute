import React from 'react';

const WhyChooseUs = () => {
    // A data array to make the components more dynamic and reusable
    const reasons = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5W1xN5iRY-6C9UnF0x5HC8g4Msv-ogoLm38bQxb1e4OvfI1q0wDo8Nr8-Bc3Cf7E8AQyKhPAffHLdAtqEWnnT0pQFoM0bn9OdkOLLuwn0agtdNO5fJ39p0z4aetva679_Jjae753wy1yX3uTHTgz7EshY6TRZEBPKlgINsOYP1Wp3EdC6ucTu7CihbdWcNRMcF8v4lakJeNFt-gWb7FDeC6cPKFN3lup2XwpPO3qGSUkKo7hpbtl-LplnZ7CeI2EYtGErsNv-7W8F",
            title: "Rafting",
            description: "Navigate the thrilling rapids of the Bhotekoshi River with our guided rafting tours."
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtJfJwVzCWhfeNFBe2PrbhRxdC3EPzmx2Us-su1xQ5J8arRZx0MjxvtzJ9bIpxyJ77mxxdP3SmdiyAO6gMq59dm3gb8Itb15fmV_7hbW94EIUy4aZkivEIakNcEmg1DjWmWiQNynSnLhZYQHnBHkIsPgJ8o6sYRFJakt80YR7T-wrqixOGftCPc8v4WDnjgPEE9IndVN9sJjVoUcYmkT6UxkXpD9n-f_XDmVdFygUnY1h1Vsx9HKuvLQjpfRlXiSY4V3tAEKzJzseG",
            title: "Kayaking",
            description: "Explore the serene waters with our kayaking sessions, suitable for all skill levels."
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVeqo0yMZbS-hKzpggxoZGsl15qdmdf-VADySYHv4VrZrQabBXY5A3z-OTuJ0eQ0QsYMSWapwhr57oWjcKAdmL9spW8b0BxhZlGKQjj5mkDi3hhpr39Hyt1PrkXMLhdzCSc-AujvoST4rXtsAJU5XjhSxlh1YWY2eJDJwJVgYX68UeIN-DdK9THyOzcyZEL94Sj-lkauzweQufOM2LbBIphFH3C4JPGAJP3MaibmE1V116zFkww8-NJS-o420yTnwMYmQyrmaazMK",
            title: "Canyoning",
            description: "Descend through waterfalls and natural rock formations with our expert-led canyoning adventures."
        }
    ];

    return (
        <div className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Why Choose Sukute Resort?</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Unforgettable experiences await, blending adventure with serene relaxation for every guest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="group flex flex-col gap-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                    >
                        <div className="relative">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                                style={{ backgroundImage: `url("${reason.image}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all"></div>
                        </div>
                        <div className="p-6 pt-0">
                            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                            <p className="text-[#4c809a] text-sm leading-relaxed">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;