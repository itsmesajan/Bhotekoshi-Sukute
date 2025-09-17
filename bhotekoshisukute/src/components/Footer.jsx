import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap gap-8 justify-between items-start">
                    <div className="flex-1 min-w-[220px] max-w-[340px]">
                        <h3 className="text-lg font-bold text-white mb-2">Sukute Resort</h3>
                        <p className="text-sm">Your adventure in Nepal begins here. Experience comfort and thrills in one place.</p>
                    </div>
                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-white transition-colors" to="#">Virtual Tour</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Activities</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Accommodations</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Booking</Link></li>
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link className="hover:text-white transition-colors" to="#">Privacy Policy</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Terms of Service</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a className="text-slate-400 hover:text-white transition-colors" href="#" aria-label="Facebook">
                                <FaFacebookF size={24} />
                            </a>
                            <a className="text-slate-400 hover:text-white transition-colors" href="#" aria-label="Twitter">
                                <FaTwitter size={24} />
                            </a>
                            <a className="text-slate-400 hover:text-white transition-colors" href="#" aria-label="Instagram">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>© 2024 Sukute Resort. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;