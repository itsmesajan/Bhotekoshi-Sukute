import React from 'react'

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
            <div className="flex flex-col md:flex-row items-center gap-12 container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex-1">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[var(--secondary-color)] mb-6 leading-tight">
                        More than a Resort,<br/>It's an Experience.
                    </h2>
                    <p className="text-lg text-slate-700 mb-8">
                        Bhotekoshi Beach is dedicated to creating unforgettable memories for every guest. Our mission is
                        to
                        offer a family-friendly environment where adventure meets comfort. Managed by a team of seasoned
                        hospitality professionals, we deliver exceptional service that sets us apart from other local
                        properties. Discover a place where every detail is designed for your enjoyment and relaxation.
                    </p>
                    <a href="#"
                        className="inline-block bg-[var(--primary-color)] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all">
                        Learn More
                    </a>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMURNhlEjgHqG26tmSYmVtU_kVW85ATtTA5NichLd6YA_FUCPK3Yg6Lldgg07wmNEOLZjFo1szeACwuiw4Bm-RwEzWZNkmuFWYq_clssL4LMarb3fbZwRx20_f0TDyalOkCli2-g=s1360-w1360-h1020-rw"
                        alt="Bhotekoshi Beach Staff"
                        className="rounded-3xl shadow-2xl object-cover w-full max-w-md h-72 md:h-80 border-4 border-[var(--primary-color)]" />
                </div>
            </div>
        </section>
  )
}

export default AboutSection
