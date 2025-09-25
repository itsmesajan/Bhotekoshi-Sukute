import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {/* Scroll Up Button */}
            <button
                id="scrollUpBtn"
                onClick={scrollToTop}
                className={`fixed sm:bottom-24 bottom-36 right-6 z-[60] bg-[var(--primary-color)] text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all ${
                    isVisible ? '' : 'hidden'
                }`}
            >
                <span className="material-symbols-outlined text-2xl">arrow_upward</span>
            </button>

            {/* Virtual Tour Floating Button */}
            <a
                href="#"
                className="fixed sm:bottom-6 bottom-20 left-6 z-[60] bg-white border border-[var(--primary-color)] text-[var(--secondary-color)] rounded-full px-5 py-3 shadow-lg flex items-center gap-2 hover:bg-[var(--primary-color)] hover:text-white transition-all"
            >
                <span className="material-symbols-outlined text-xl">travel_explore</span>
                <span className="font-bold text-sm">Virtual Tour</span>
            </a>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed sm:bottom-6 bottom-20 right-6 z-[60] bg-green-500 text-white rounded-full p-6 w-8 h-8 shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
            >
                <i className="fab fa-whatsapp fa-lg"></i>
            </a>
        </>
    );
};

export default FloatingButtons;