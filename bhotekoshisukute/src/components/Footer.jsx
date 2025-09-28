import React from 'react';

const socialLinks = [
    { icon: 'fa-facebook-f', href: '#' },
    { icon: 'fa-instagram', href: '#' },
    { icon: 'fa-tiktok', href: '#' },
    { icon: 'fa-youtube', href: '#' },
];

const quickLinks = [
    { label: 'Virtual Tour', href: '#' },
    { label: 'Activities', href: '#' },
    { label: 'Accommodations', href: '#' },
    { label: 'Booking', href: '#' },
];

const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: '#' },
];

const otaLinks = [
    { label: 'booking.com', href: '#' },
    { label: 'expedia', href: '#' },
    { label: 'agoda', href: '#' },
    { label: 'makemytrip', href: '#' },
    { label: 'ctrip', href: '#' },
];

const Footer = () => {
    return (
        <footer className="bg-[var(--water-color)] text-slate-200 pb-[80px] md:pb-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap gap-8 justify-between items-start">
                    <div className="flex-1 min-w-[220px] max-w-[340px]">
                        <a href="index.html">
                            <img src="assets/logo_2.png" alt="Bhotekoshi Beach" className="h-20 mb-4" />
                        </a>
                        <p className="text-sm mb-4">
                            Your adventure in Nepal begins here. Experience comfort and thrills in one place.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} className="text-slate-200 hover:text-white transition-colors" href={link.href}>
                                    <i className={`fab ${link.icon} h-6 w-6`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="hover:text-white transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="hover:text-white transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[160px] max-w-[220px]">
                        <h4 className="font-semibold text-white mb-4">OTA Links</h4>
                        <ul className="space-y-2 text-sm">
                            {otaLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="hover:text-white transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-300 pt-8 text-center text-sm text-slate-300">
                    <p>
                        © 2025 Bhotekoshi Beach. All rights reserved by{' '}
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