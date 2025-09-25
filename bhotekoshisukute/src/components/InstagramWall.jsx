import React from 'react'
const instagramImages = [
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMKtbA-4OU1c_CvRNeqopIeUMAdYo59upRWudnneVVtA2-k2q_vWXc_io-mBgu2-qVBBq1A6BHp9jkvQ1cz2_kexXxJTyQ3wQOSA278mpIEWXyIJPo4X-x8SU1UbPPRU38L-I4nA=s1360-w1360-h1020-rw",
        alt: "Gallery 1",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np4rcXLWiZFNj1wRhnwW31I3_EIVtCXYhbVOIu6YuYwjz6iYjXgCTqXeffRWrYZ5lS96CF8NX4773qP8Ne8ZFxtvhla7URmk8bqItkT0rLwZQ30LUdw2SMWpTNgzNS_fAKavsVbvw=s1360-w1360-h1020-rw",
        alt: "Gallery 2",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr9BCJVxReJGw-XGxGHHt3s_2pjmbDemdP0tX-IOeiznv_2wh8JLEbW8o6ZwyiaGQ_bhci8vkCGwTrjXW-rwKn-qW7oQlIyfmuU5RzB4DU0iOvwq-7gA-RplNVQbG4CpVils__x=s1360-w1360-h1020-rw",
        alt: "Gallery 3",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqml8UhqgwnkoKXuspNDeO4vyu85q9meKVqihq9tZQyCvEDJebXdO-gh0JJomRGJ5PmTOsV1gSR2S5520s3YOKGtq9cmu79jDrbUsUvKMhe7mReqJn3lM8pz7p1EUVMu3X5EeH=s1360-w1360-h1020-rw",
        alt: "Gallery 4",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgOeueqqwZ_BZbtOANIN0q-wg54hO9aHxFj8ZPyFglvLhnSj1l398RwYlHOE7gaWQq_Ms0MFrZLAwqes2vdq_4VsdNmTodGda9TfNsa8nd4pk4L8bKNzOPLgVl8XlfetQ2FNhAGw=s1360-w1360-h1020-rw",
        alt: "Gallery 5",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1170&auto=format&fit=crop",
        alt: "Gallery 6",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr4CwrV43_nGYpcwQra89ZDsBYYkbQsQIRJPU_Tclj9QHOWdKyckPQZAgUW1MuKIt9_Dw9E3r0EpthTZpHxrXAUNRSMkeE71MBBLLgl-VJQ4ve-UUh2Dpp800KX1GKw7W96Dwo=s1360-w1360-h1020-rw",
        alt: "Gallery 7",
        link: "https://instagram.com/yourprofile",
    },
    {
        src: "https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?q=80&w=1170&auto=format&fit=crop",
        alt: "Gallery 8",
        link: "https://instagram.com/yourprofile",
    },
];

const InstagramWall = () => {
  return (
            <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">#Instagram Wall</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    A glimpse of unforgettable moments and scenic beauty at Bhotekoshi Beach.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {instagramImages.map((image, index) => (
                    <div key={index} className="relative group w-full">
                        <img
                            className="w-full aspect-square object-cover rounded-xl shadow group-hover:scale-105 transition-transform duration-300"
                            src={image.src}
                            alt={image.alt}
                        />
                        <a
                            href={image.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                        >
                            <i className="fab fa-instagram text-white text-4xl"></i>
                        </a>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition-all"
                >
                    <i className="fab fa-instagram text-xl"></i>
                    Follow us on Instagram
                </a>
            </div>
        </section>
  )
}

export default InstagramWall


