import React from 'react';

const heroSlides = [
    {
        title: "Experience the Best of Sukute",
        description: "Your perfect getaway for family fun and corporate retreats. Discover adventure and relaxation in the heart of Nepal.",
        buttonText: "Book Your Stay",
        buttonLink: "#",
        imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqQc2RYoCQQtQIKxa1BgvkMYAjYdsvJzlqFlAYzFqYvYuY_3kHstW1yODmq_dGWBQ7KkdgpbTenxcAmS9rHAzD7b39kjFapvF0-zBxdVRFtXB4xEKOw3TAuNUC7edq6aEiHfAAx=s1360-w1360-h1020-rw",
    },
    {
        title: "Adventure Awaits",
        description: "Enjoy rafting, kayaking, canyoning and more with expert guides and safe facilities.",
        buttonText: "Explore Activities",
        buttonLink: "#",
        imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np4u9ayzDRvSRSTgXTKLFuCZDU4Ptsdq65a0L_fBsmNg6FOewIvcDtxuTPTzvd6DdbbEFAOoawAwBtwfuj8CCFQFbTyl0P7zLEzsgOOQtyUcHLrnDljXjHbGTZotbgnKIl7J6vy=s1360-w1360-h1020-rw",
    },
    {
        title: "Relax & Rejuvenate",
        description: "Unwind in our comfortable accommodations and enjoy delicious meals by the riverside.",
        buttonText: "View Packages",
        buttonLink: "#",
        imageUrl: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1360&auto=format&fit=crop",
    },
];

const HeroSection = () => {
    return (
        <section className="relative min-h-[500px] sm:min-h-[700px] flex items-center rounded-2xl overflow-hidden bg-cover bg-center">
            <div className="swiper hero-swiper w-full z-10 h-full absolute inset-0">
                <div className="swiper-wrapper mb-12 h-full">
                    {heroSlides.map((slide, index) => (
                        <div key={index} className="swiper-slide flex flex-col items-center justify-center gap-6 px-4 h-full relative">
                            <div className="absolute inset-0 w-full h-full z-0">
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)), url("${slide.imageUrl}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    className="w-full h-full absolute inset-0"
                                ></div>
                            </div>
                            <div className="relative mx-auto text-center z-10 space-y-6">
                                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-slate-100 sm:text-lg lg:text-xl max-w-3xl mx-auto">
                                    {slide.description}
                                </p>
                                <button className="bg-[var(--primary-color)] hover:bg-blue-600 hover:text-white transition-all text-[var(--secondary-color)] font-bold py-3 px-8 rounded-full sm:text-lg shadow-lg transform hover:scale-105">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </section>
    );
};

export default HeroSection;