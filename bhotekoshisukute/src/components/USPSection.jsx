import React from 'react';

const usps = [
    {
        iconType: 'material',
        iconName: 'kayaking',
        title: 'Rafting',
        description: 'Thrilling rafting adventures on the Bhotekoshi River.',
    },
    {
        iconType: 'material',
        iconName: 'restaurant',
        title: 'Local Fish',
        description: 'Freshly prepared local fish delicacies.',
    },
    {
        iconType: 'fa',
        iconName: 'fa-drumstick',
        title: 'Local Chicken',
        description: 'Authentic Nepali style local chicken dishes.',
    },
    {
        iconType: 'fa',
        iconName: 'fa-turkey',
        title: 'Kalij',
        description: 'Special Kalij (wild pheasant) cuisine.',
    },
    {
        iconType: 'material',
        iconName: 'spa',
        title: 'Fapar ko Dhido',
        description: 'Traditional buckwheat dhido for a healthy meal.',
    },
    {
        iconType: 'material',
        iconName: 'fireplace',
        title: 'Daura Chulo ko Parikar',
        description: 'Meals cooked on traditional wood-fired stoves.',
    },
    {
        iconType: 'material',
        iconName: 'local_fire_department',
        title: 'Campfire',
        description: 'Enjoy cozy evenings with campfire gatherings.',
    },
    {
        iconType: 'material',
        iconName: 'more_horiz',
        title: 'Many More',
        description: 'Explore more unique experiences at Bhotekoshi Beach.',
    },
];

const USPSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#ffcd0012]">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Our Best USPs</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Discover what makes Bhotekoshi Beach truly unique and memorable.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {usps.map((usp, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
                        {usp.iconType === 'material' ? (
                            <span className="material-symbols-outlined text-[var(--green-color)] text-4xl mb-4">
                                {usp.iconName}
                            </span>
                        ) : (
                            <i className={`fa-solid ${usp.iconName} text-[var(--green-color)] text-4xl mb-4`}></i>
                        )}
                        <h3 className="font-bold text-lg text-slate-800 mb-2">{usp.title}</h3>
                        <p className="text-slate-600 text-sm text-center">{usp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default USPSection;