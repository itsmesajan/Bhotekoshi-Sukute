import React from "react";


const Testimonials = () => {
  const testimonials = [
    {
        name: "Priya Sharma",
        date: "May 15, 2024",
        rating: 5,
        review: "Bhotekoshi Beach exceeded our expectations! The family activities were fantastic, and the kids had a blast. We'll definitely be back!",
        profilePicture: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaivHlvleMJBJR-jExUtCahavnvfO8Wm0L-6kqvfYPdSbDZwe2RtXaKfwb6D8TdGcdw21Q1d7WvT0LCbN4fN6mV1dl12TWDiITxI2fsFHLpT_vMj3Vj3CwWpqGzEYvGOxm4H3P1bndaIxA0UovWkooDWH09kjg85WBDcS-D-SRSErycLG1XMEBo3rOGcaioc_vyMn2-qkwo63wqUDlcC1oWpunG5ejV7vDXlAaF-Qwdy7mhCaulBt1SGVReyuCYNP5NVCHbRCCzbj",
    },
    {
        name: "Arjun Thapa",
        date: "April 20, 2024",
        rating: 4,
        review: "The corporate retreat was a huge success. The facilities were excellent, and the team-building activities were well-organized and fun.",
        profilePicture: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOg6z_-4UlfASV7e-J8nfnVVCQJnObe2u2nkQcLQuKgrAaRfW1B9Dg6V_Xw3rqazXyJgYjXWH1pm1l2Bz9Zp4Do-HyBlDiQ7uveBddps6tNEZoWmF2LIn8AbmQSwmuRDFxNVIswh3rtgFCWCfEQt-0m6ZuL2o-W8P5-HPFXtWsfczb7ANXUjmXcNKCL_pH96308h2roIpxxsPm3ERgs5fM8-t_ECnU3tDTf4bM0KB_o4bbH6-JtMxctYeZ8c_PrHrUE_UI5l5vMoQM",
    },
    {
        name: "Anjali Rai",
        date: "March 10, 2024",
        rating: 5,
        review: "The natural beauty of Sukute combined with the resort's amenities made for a perfect getaway. Highly recommended!",
        profilePicture: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgOeueqqwZ_BZbtOANIN0q-wg54hO9aHxFj8ZPyFglvLhnSj1l398RwYlHOE7gaWQq_Ms0MFrZLAwqes2vdq_4VsdNmTodGda9TfNsa8nd4pk4L8bKNzOPLgVl8XlfetQ2FNhAGw=s1360-w1360-h1020-rw",
    },
];

  return (
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
                    Guest Experiences
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url("${testimonial.profilePicture}")` }}
                            ></div>
                            <div className="ml-4">
                                <p className="font-bold text-slate-800">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.date}</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`material-symbols-outlined text-lg ${
                                        i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'
                                    }`}
                                >
                                    star
                                </span>
                            ))}
                        </div>
                        <p className="text-slate-600">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </section>
  );
};

export default Testimonials;

