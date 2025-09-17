import React from 'react'

const AboutSection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="flex flex-col md:flex-row items-center gap-12 container mx-auto px-4 sm:px-8">
                <div className="flex-1">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--primary-color)] mb-6 leading-tight">
                        More Than a Resort,<br/>It's an Experience.
                    </h2>
                    <p className="text-lg text-slate-700 mb-8">
                        Sukute Resort is dedicated to creating unforgettable memories for every guest. Our mission is to
                        offer a family-friendly environment where adventure meets comfort. Managed by a team of seasoned
                        hospitality professionals, we deliver exceptional service that sets us apart from other local
                        properties. Discover a place where every detail is designed for your enjoyment and relaxation.
                    </p>
                    <a href="#"
                        className="inline-block bg-[var(--primary-color)] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all">
                        Learn More
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5W1xN5iRY-6C9UnF0x5HC8g4Msv-ogoLm38bQxb1e4OvfI1q0wDo8Nr8-Bc3Cf7E8AQyKhPAffHLdAtqEWnnT0pQFoM0bn9OdkOLLuwn0agtdNO5fJ39p0z4aetva679_Jjae753wy1yX3uTHTgz7EshY6TRZEBPKlgINsOYP1Wp3EdC6ucTu7CihbdWcNRMcF8v4lakJeNFt-gWb7FDeC6cPKFN3lup2XwpPO3qGSUkKo7hpbtl-LplnZ7CeI2EYtGErsNv-7W8F"
                        alt="Sukute Resort Staff"
                        className="rounded-3xl shadow-2xl object-cover w-full max-w-md h-72 md:h-80 border-4 border-[var(--primary-color)]" />
                </div>
            </div>
    </div>
  )
}

export default AboutSection
