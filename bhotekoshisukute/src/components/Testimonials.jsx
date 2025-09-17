import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      date: "May 15, 2024",
      rating: 5,
      feedback:
        "Sukute Resort exceeded our expectations! The family activities were fantastic, and the kids had a blast. We'll definitely be back!",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaivHlvleMJBJR-jExUtCahavnvfO8Wm0L-6kqvfYPdSbDZwe2RtXaKfwb6D8TdGcdw21Q1d7WvT0LCbN4fN6mV1dl12TWDiITxI2fsFHLpT_vMj3Vj3CwWpqGzEYvGOxm4H3P1bndaIxA0UovWkooDWH09kjg85WBDcS-D-SRSErycLG1XMEBo3rOGcaioc_vyMn2-qkwo63wqUDlcC1oWpunG5ejV7vDXlAaF-Qwdy7mhCaulBt1SGVReyuCYNP5NVCHbRCCzbj",
    },
    {
      name: "Arjun Thapa",
      date: "April 20, 2024",
      rating: 4,
      feedback:
        "The corporate retreat was a huge success. The facilities were excellent, and the team-building activities were well-organized and fun.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOg6z_-4UlfASV7e-J8nfnVVCQJnObe2u2nkQcLQuKgrAaRfW1B9Dg6V_Xw3rqazXyJgYjXWH1pm1l2Bz9Zp4Do-HyBlDiQ7uveBddps6tNEZoWmF2LIn8AbmQSwmuRDFxNVIswh3rtgFCWCfEQt-0m6ZuL2o-W8P5-HPFXtWsfczb7ANXUjmXcNKCL_pH96308h2roIpxxsPm3ERgs5fM8-t_ECnU3tDTf4bM0KB_o4bbH6-JtMxctYeZ8c_PrHrUE_UI5l5vMoQM",
    },
    {
      name: "Anjali Rai",
      date: "March 10, 2024",
      rating: 5,
      feedback:
        "The natural beauty of Sukute combined with the resort's amenities made for a perfect getaway. Highly recommended!",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC78dDX-8ISHpcftoX4sZTQPfGVeCnbuHIszm7c6OR0YRztp2wa73GMPUIuZI_PrkXXSUH1p30KsEm16s3gdOuAHd4M1mSbm7xeGCwj9rR8iF1-dDfyOzHiV3ZGgWUw3cjSVFTeK2WBGaSFgC_lni5eR564OSxzj81IZxx5RFHfQPBTPYRzt9pnMfFGn5fZDS_0KRJN8bbv3oz9KoaZsy5PvtHqv-wToCNq-KQH6vR3Ei-2qJcUA6I0PaMUW6kBI9y-yMTITwaOa5mi",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          What Our Guests Are Saying
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div className="bg-white p-8 rounded-2xl shadow-sm" key={index}>
            <div className="flex items-center mb-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url("${testimonial.avatar}")` }}
              ></div>
              <div className="ml-4">
                <p className="font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.date}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-4">
               {/* Render filled stars based on the rating */}
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                ))}
                {/* Render outlined stars for the remainder */}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <FaRegStar key={i + testimonial.rating} className="text-lg" />
                ))}
            </div>
            <p className="text-slate-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
