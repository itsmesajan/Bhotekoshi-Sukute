// src/components/Accommodations.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const accommodationsData = [
    {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmj-ipcm6jHKXyAqPm4qsWAG5hSq42_VDes3q4Ki0yT1nc-b26nNb_TVJzIENTJGDYkLh4ILVl9CWdZbEzLzKGSF1Iko5zv29rKKaL5NnPEEPN1lU5IB_Z5EkV12PI1C3wXoMV4NpONVKRh1_ezvquKexp5yRG8QXLJWsL6Nj3qVVll7bqHP8SED4GnejBYYg_npViuul0dA-Z55vkxKy0sFtEm-Vbm536h2zf0Q7Zq2SHNOlyVZOP6GFumM0neXvqDcMbt0bULFCv',
    alt: 'Family Cottage',
    title: 'Family Cottage',
    description: 'Ideal for families, featuring multiple beds and a private balcony.',
    price: 'NPR 8,500/night',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVeqo0yMZbS-hKzpggxoZGsl15qdmdf-VADySYHv4VrZrQabBXY5A3z-OTuJ0eQ0QsYMSWapwhr57oWjcKAdmL9spW8b0BxhZlGKQjj5mkDi3hhpr39Hyt1PrkXMLhdzCSc-AujvoST4rXtsAJU5XjhSxlh1YWY2eJDJwJVgYX68UeIN-DdK9THyOzcyZEL94Sj-lkauzweQufOM2LbBIphFH3C4JPGAJP3MaibmE1V116zFkww8-NJS-o420yTnwMYmQyrmaazMK',
    alt: 'Deluxe Room',
    title: 'Deluxe Room',
    description: 'Spacious room with river view, air conditioning, and modern amenities.',
    price: 'NPR 6,000/night',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmj-ipcm6jHKXyAqPm4qsWAG5hSq42_VDes3q4Ki0yT1nc-b26nNb_TVJzIENTJGDYkLh4ILVl9CWdZbEzLzKGSF1Iko5zv29rKKaL5NnPEEPN1lU5IB_Z5EkV12PI1C3wXoMV4NpONVKRh1_ezvquKexp5yRG8QXLJWsL6Nj3qVVll7bqHP8SED4GnejBYYg_npViuul0dA-Z55vkxKy0sFtEm-Vbm536h2zf0Q7Zq2SHNOlyVZOP6GFumM0neXvqDcMbt0bULFCv',
    alt: 'Family Cottage',
    title: 'Family Cottage',
    description: 'Ideal for families, featuring multiple beds and a private balcony.',
    price: 'NPR 8,500/night',
  },
 
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDPnh2FzR8PQdgJqhjgKB8DiQm1pyOOq5ZrTqBGQTOjf_N43snY_dz6Jzeo_rRxmr5agz8_MvSG5WsXMt-JkYmTX_EYdr1-YCW9nZYsZxoBfjBqr7cH8TP73KQv8-qxU34ajkF8oarhUyMkJlQhTX1XlqDRIdjsCCac_Xs8Pqi8aLs3yzLBRi-shXPK7tZz_bYKftaN46bOynFSs88-gbIo7V654DONUDMjK8McPnZJhls4lmesXxXCTkyvIcN5H3rhl-TN-x2CR_M',
    alt: 'Tent Stay',
    title: 'Tent Stay',
    description: 'Experience nature with our comfortable tent accommodations by the riverside.',
    price: 'NPR 4,000/night',
  },
   {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmj-ipcm6jHKXyAqPm4qsWAG5hSq42_VDes3q4Ki0yT1nc-b26nNb_TVJzIENTJGDYkLh4ILVl9CWdZbEzLzKGSF1Iko5zv29rKKaL5NnPEEPN1lU5IB_Z5EkV12PI1C3wXoMV4NpONVKRh1_ezvquKexp5yRG8QXLJWsL6Nj3qVVll7bqHP8SED4GnejBYYg_npViuul0dA-Z55vkxKy0sFtEm-Vbm536h2zf0Q7Zq2SHNOlyVZOP6GFumM0neXvqDcMbt0bULFCv',
    alt: 'Family Cottage',
    title: 'Family Cottage',
    description: 'Ideal for families, featuring multiple beds and a private balcony.',
    price: 'NPR 8,500/night',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDPnh2FzR8PQdgJqhjgKB8DiQm1pyOOq5ZrTqBGQTOjf_N43snY_dz6Jzeo_rRxmr5agz8_MvSG5WsXMt-JkYmTX_EYdr1-YCW9nZYsZxoBfjBqr7cH8TP73KQv8-qxU34ajkF8oarhUyMkJlQhTX1XlqDRIdjsCCac_Xs8Pqi8aLs3yzLBRi-shXPK7tZz_bYKftaN46bOynFSs88-gbIo7V654DONUDMjK8McPnZJhls4lmesXxXCTkyvIcN5H3rhl-TN-x2CR_M',
    alt: 'Tent Stay',
    title: 'Tent Stay',
    description: 'Experience nature with our comfortable tent accommodations by the riverside.',
    price: 'NPR 4,000/night',
  },
  // Add other accommodation items
];

const Accommodations = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Accommodations</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Choose from our comfortable rooms designed for relaxation and convenience.
                </p>
            </div>
            <Swiper
                className="accommodations-swiper pb-16 px-4 sm:px-6 lg:px-8"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1, centeredSlides: false },
                    768: { slidesPerView: 2, centeredSlides: true },
                    1024: { slidesPerView: 3, centeredSlides: true },
                }}
            >
                {accommodationsData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300">
                            <img src={item.image} alt={item.alt} className="rounded-xl mb-6 w-full h-64 object-cover shadow-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 text-center">{item.description}</p>
                            <div className="text-lg font-extrabold text-[var(--primary-color)] mb-2">{item.price}</div>
                            <button className="bg-[var(--primary-color)] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all">
                                Book Now
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Accommodations;