import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from "../assets/logo.png";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const location = useLocation(); // Track current route

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleServicesDropdownToggle = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

     // Close dropdown when route changes
  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

    return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 py-3">
            {/* Logo */}
            <div className="flex items-center gap-3 text-slate-800">
              <Link to="/home">
                <img
                  src={mainLogo}
                  alt="Bhotekoshi Beach"
                  className="h-20 w-auto sm:h-24"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
                to="/about"
              >
                Resort
              </Link>

              <div className="relative">
                <a
                  onClick={handleServicesDropdownToggle}
                  className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium flex items-center gap-1 cursor-pointer"
                  aria-expanded={isServicesDropdownOpen}
                  aria-controls="services-dropdown-menu"
                >
                  Services
                  <span
                    className={`material-symbols-outlined text-xs transform transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </a>
                <ul
                  id="services-dropdown-menu"
                  className={`absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-40 z-30 transition-all duration-300 ${
                    isServicesDropdownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  role="menu"
                  aria-labelledby="services-dropdown-toggle"
                >
                  <li>
                    <Link
                      to="/roomList"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/restaurant"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hall"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Hall
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                to="/activities"
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
              >
                Activities
              </Link>
              <Link
                to="/packages"
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
              >
                Package & Offers
              </Link>
              <Link
                to="/facilities"
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
              >
                Facilities
              </Link>
              <Link
                to="/gallery"
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
              >
                Contact Us
              </Link>
            </nav>
            {/* Book Now Button & Mobile Menu */}
            <div className="flex items-center gap-2">
              <a className="flex min-w-[84px] max-w-[480px] cursor-pointer hover:bg-blue-600 hover:text-white items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                <span className="truncate text-[var(--secondary-color)] hover:text-white">
                  Book Now
                </span>
              </a>
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center"
                onClick={handleMobileNavToggle}
              >
                <span className="material-symbols-outlined text-3xl text-slate-700">
                  menu
                </span>
              </button>
            </div>
          </div>
          {/* Mobile Navigation Drawer */}
          <div
            id="mobileNav"
            className={`fixed inset-0 bg-black/40 z-50 ${
              isMobileNavOpen ? "" : "hidden"
            }`}
          >
            <div className="absolute right-0 top-0 w-64 bg-white shadow-lg flex flex-col p-6 gap-4">
              <button className="self-end mb-4" onClick={handleMobileNavToggle}>
                <span className="material-symbols-outlined text-3xl text-slate-700">
                  close
                </span>
              </button>
              <Link
                to="/about"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Resort
              </Link>

              <div>
                <button
                  className="text-slate-700 font-medium py-2 w-full text-left flex items-center gap-1"
                  onClick={handleServicesDropdownToggle}
                >
                  Services
                  <span
                    className={`material-symbols-outlined text-xs transform transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <ul
                  id="mobileRoomsMenu"
                  className={`pl-4 mt-1 ${
                    isServicesDropdownOpen ? "" : "hidden"
                  }`}
                >
                  <li>
                    <Link to="/roomList" className="block py-1 text-slate-600">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/restaurant"
                      className="block py-1 text-slate-600"
                    >
                      Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link to="/hall" className="block py-1 text-slate-600">
                      Hall
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                to="/activities"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Activities
              </Link>
              <Link
                to="/packages"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Package & Offers
              </Link>
              <Link
                to="/facilities"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Facilities
              </Link>
              <Link
                to="/gallery"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 font-medium py-2 border-b"
              >
                Contact Us
              </Link>
              <a className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer hover:bg-blue-600 hover:text-white items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                <span className="truncate text-[var(--secondary-color)] hover:text-white">
                  Book Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;