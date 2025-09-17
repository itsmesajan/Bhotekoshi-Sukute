// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaHotel, FaBars } from 'react-icons/fa';

const Header = () => {
    const navLinks = [
        { name: 'About', href: '/' }, // Change to the correct path
        { name: 'Activities', href: '/' },
        { name: 'Accommodations', href: '/' },
        { name: 'Facilities', href: '/' },
        { name: 'Contact Us', href: '/contact' }, // New path
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 py-3">
                    <div className="flex items-center gap-3 text-slate-800">
                        <FaHotel className="text-[var(--primary-color)]" />
                        <h1 className="text-slate-800 text-xl font-bold">Sukute Resort</h1>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                className="text-slate-600 hover:text-[var(--primary-color)] transition-colors text-sm font-medium"
                                to={link.href}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                        <span className="truncate">Book Now</span>
                    </button>

                    <button className="lg:hidden flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-slate-700"> menu </span>
                    </button>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;