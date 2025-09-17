import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md'; // Using a different icon for virtual tour

const FloatingButtons = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Scroll Up Button */}
            {showScrollBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 bg-[var(--primary-color)] text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={24} />
                </button>
            )}

            {/* Virtual Tour Floating Button */}
            <Link
                to="#"
                className="fixed bottom-6 left-6 z-50 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full px-5 py-3 shadow-lg flex items-center gap-2 hover:bg-[var(--primary-color)] hover:text-white transition-all"
            >
                <MdTravelExplore size={24} />
                <span className="font-bold text-sm">Virtual Tour</span>
            </Link>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
        </>
    );
};

export default FloatingButtons;