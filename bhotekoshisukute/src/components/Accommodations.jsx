import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import tree2 from '../assets/tree_2.png';
import tree1 from '../assets/tree.png';
import { Link } from 'react-router-dom';

const accommodations = [
    {
        title: 'Deluxe Room',
        description: 'Spacious room with river view, air conditioning, and modern amenities.',
        price: 'USD 35/night',
        imageUrl: 'https://images.unsplash.com/photo-1737527852155-9720a5e2254f?q=80&w=1169&auto=format&fit=crop',
    },
    
    {
        title: 'Family Suite',
        description: 'Ideal for families, featuring multiple beds and a private balcony.',
        price: 'USD 40/night',
        imageUrl: 'https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1170&auto=format&fit=crop',
    },
    {
        title: 'Deluxe Room',
        description: 'Spacious room with river view, air conditioning, and modern amenities.',
        price: 'USD 35/night',
        imageUrl: 'https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?q=80&w=1170&auto=format&fit=crop',
    },
    {
        title: 'Safari Tent',
        description: 'Experience nature with our comfortable tent accommodations by the riverside.',
        price: 'USD 40/night',
        imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrlDoOAJHQX0KAyF4t8z5KjHC-VmA3Y0WFW-PG9dmx9kNdZsqVZrW6VbV8n0AnvyrDYofpKHZ3wxt9nLXysAVahTaSqdVGuz2Cc6Vof4VsP5bKcogt8kHpBtJZbkSH5HLBgsXySuQ=s1360-w1360-h1020-rw',
    },
    {
        title: 'Executive Suite',
        description: 'The pinnacle of luxury, our Executive Suite boasts a separate living room.',
        price: 'USD 50/night',
        imageUrl: 'https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?q=80&w=1170&auto=format&fit=crop',
    },
];

const AccommodationsSection = () => {
    
    return (
        <>
            {/* Decorative images */}
            <img src={tree2} alt="decorative tree" className="absolute left-0 w-32 sm:w-64 opacity-10 pointer-events-none select-none" />
            <img src={tree1} alt="decorative tree" className="absolute right-0 w-32 sm:w-64 opacity-10 pointer-events-none select-none" />

            <section className="py-16 sm:py-24 relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Accommodations</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Choose from our comfortable rooms designed for relaxation and convenience.
                    </p>
                </div>
                <Swiper
                    className="accommodations-swiper !pb-12"
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    pagination={{ clickable: true }}
                >
                    {accommodations.map((room, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300">
                            <img src={room.imageUrl} alt={room.title} className="rounded-xl mb-6 w-full h-64 object-cover shadow-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{room.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 text-center">{room.description}</p>
                            <div className="text-lg font-extrabold text-[var(--secondary-color)] mb-2">{room.price}</div>
                            <button className="bg-[var(--primary-color)] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all">
                                Book Now
                            </button>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className="text-center mt-8">
                    <Link to="/roomList" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-600 transition-all">
                        <i className="fa-regular fa-paper-plane"></i>
                        Explore More
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AccommodationsSection;