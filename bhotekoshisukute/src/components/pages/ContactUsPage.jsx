import React from 'react';
import LocationDetails from '../Contact/LocationDetails';
import Faq from '../ui/Faq';
import ContactForm from '../ui/ContactForm';
import useFetchApi from '../../hooks/useFetchApi';


const ContactUsPage = () => {
  const {
    data: siteregulars,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_siteregulars.php",
    "siteregulars"
  );

  const mapUrl = siteregulars?.location_map;


  if (loading) return <></>;
  if (error) return <div>{error}</div>;
  return (
    <main className="flex-1">
      <section className="py-16 lg:py-32 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 ">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column - Form & FAQs */}
            <div className="flex flex-col space-y-12">
              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Right column - Image & Contact Info */}
            <div className="flex flex-col space-y-8">
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <LocationDetails />
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 w-full my-16 overflow-hidden rounded-xl shadow-lg">
            <div className="h-full w-full">
              {mapUrl ? (
                <iframe
                  src={mapUrl}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              ) : (
                <p>Map not available</p>
              )}
            </div>
          </div>

          {/* FAQs */}
          <Faq />
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;