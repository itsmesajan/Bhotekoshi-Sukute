import React from 'react';

const mobileMenuItems = [
    {
        href: '#accommodations',
        icon: 'hotel',
        label: 'Room',
    },
    {
        href: '#restaurant',
        icon: 'restaurant',
        label: 'Dining',
    },
    {
        href: '#hall',
        icon: 'meeting_room',
        label: 'Hall',
    },
    {
        href: '#book',
        icon: 'event_available',
        label: 'Book Now',
    },
    {
        href: '#contact',
        icon: 'call',
        label: 'Contact',
    },
];

const MobileFooterMenu = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-slate-200 shadow-lg flex justify-between items-center px-2 py-2 lg:hidden">
            {mobileMenuItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="flex flex-col items-center text-xs text-slate-700 hover:text-[var(--secondary-color)] flex-1"
                >
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default MobileFooterMenu;