// src/pages/ContactUsPage.jsx
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';


const ContactUsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        {/* Add contact form, map, and other contact details here */}
        <p className="mt-4 text-center">This is the contact page content.</p>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;