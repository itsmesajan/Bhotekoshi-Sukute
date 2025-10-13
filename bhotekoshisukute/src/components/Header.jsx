import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from "../assets/logo.png";
import useFetchApi from '../hooks/useFetchApi';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  // Fetch menu data
  const {
    data: navLinks,
    loading,
    error,
  } = useFetchApi("/bhotekoshibeach/api_menu.json",'navLinks'); // no need for second param

  if (loading) return <></>;
  if (error) return <div>{error}</div>;
  if (!navLinks) return <></>;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
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
            {navLinks.map((item) => (
              <div key={item.id} className="relative">
                {item.subLinks ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium flex items-center gap-1 cursor-pointer"
                    >
                      {item.title}
                      <span
                        className={`material-symbols-outlined text-xs transform transition-transform duration-200 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    <ul
                      className={`absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-30 transition-all duration-300 ${
                        openDropdown === item.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {item.subLinks.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="text-slate-600 hover:text-[var(--secondary-color)] transition-colors text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Book Now + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer hover:bg-blue-600 hover:text-white items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[var(--primary-color)] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
              <span className="truncate text-[var(--secondary-color)] hover:text-white">
                Book Now
              </span>
            </a>

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

            {navLinks.map((item) => (
              <div key={item.id}>
                {item.subLinks ? (
                  <>
                    <button
                      className="text-slate-700 font-medium py-2 w-full text-left flex items-center gap-1 border-b"
                      onClick={() => handleDropdownToggle(item.id)}
                    >
                      {item.title}
                      <span
                        className={`material-symbols-outlined text-xs transform transition-transform duration-200 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    <ul
                      className={`pl-4 mt-1 ${
                        openDropdown === item.id ? "" : "hidden"
                      }`}
                    >
                      {item.subLinks.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.link}
                            className="block py-1 text-slate-600"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="text-slate-700 font-medium py-2 border-b block"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

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