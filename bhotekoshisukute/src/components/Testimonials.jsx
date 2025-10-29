import React from "react";
import useFetchApi from "../hooks/useFetchApi";


const Testimonials = () => {

const {data: testimonials, loading, error} = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_testimonial.php", "testimonials");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

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
                                style={{ backgroundImage: `url("${testimonial.image}")` }}
                            ></div>
                            <div className="ml-4">
                                <p className="font-bold text-slate-800">{testimonial.author}</p>
                                <p className="text-sm text-slate-500">{testimonial.source}</p>
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
                        <p className="text-slate-600">"{testimonial.content}"</p>
                    </div>
                ))}
            </div>
        </section>
  );
};

export default Testimonials;

