import React from 'react';
import { Link } from 'react-router-dom';
import secondaryLogo from "../assets/logo_2.png";
import useFetchApi from '../hooks/useFetchApi';

const Footer = () => {

    const {
    data: footerContents,
    loading,
    error,
  } = useFetchApi("/api_footer.json", "footerContents");


  if (loading) return <></>;
  if (error) return <div>{error}</div>;


    return (
      <footer className="bg-[var(--water-color)] text-slate-200 pb-[80px] md:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-8 justify-between items-start">
            <div className="flex-1 min-w-[220px] max-w-[340px]">
              <Link to="/home">
                <img
                  src={secondaryLogo}
                  alt="Bhotekoshi Beach"
                  className="h-20 mb-4"
                />
              </Link>
              <p className="text-sm mb-4">
                Your adventure in Nepal begins here. Experience comfort and
                thrills in one place.
              </p>
              <div className="flex space-x-4">
                {footerContents
                  .find((s) => s.type === "socialLinks")
                  ?.items.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-white transition-colors"
                    >
                      <i className={`fab ${link.icon} h-6 w-6`}></i>
                    </a>
                  ))}
              </div>
            </div>

            {footerContents.map((section, index) => {
                if (section.type === "quickLinks") {
              return (

            <div key={index} className="flex-1 min-w-[160px] max-w-[220px]">
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="hover:text-white transition-colors"
                      to={link.url}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>)
            }
            if (section.type === "legalLinks") {
              return (
            <div key={index} className="flex-1 min-w-[160px] max-w-[220px]">
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((link, index) => (
                  <li key={index}>
                    <a
                      className="hover:text-white transition-colors"
                      href={link.url}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>)
            }

            if (section.type === "otaLinks") {
              return (
            <div key={index} className="flex-1 min-w-[160px] max-w-[220px]">
              <h4 className="font-semibold text-white mb-4">OTA Links</h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((link, index) => (
                  <li key={index}>
                    <a
                      className="hover:text-white transition-colors"
                      href={link.url}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>)
            }

            return null;
          })}
          </div>

          <div className="mt-8 border-t border-slate-300 pt-8 text-center text-sm text-slate-300">
            <p>
              © 2025 Bhotekoshi Beach. All rights reserved by{" "}
              <a href="https://longtail.info/" className="hover:text-white">
                Longtail e-media
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;