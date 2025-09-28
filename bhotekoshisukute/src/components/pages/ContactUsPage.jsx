import React from 'react';


const ContactUsPage = () => {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-dark/70 dark:text-light/70 font-light">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column - Form & FAQs */}
            <div className="flex flex-col space-y-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          className="form-input block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          className="form-input block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        className="form-input block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        type="text"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="form-input block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      className="w-full rounded-lg bg-[var(--primary-color)] text-[var(--secondary-color)] py-3 px-4 text-sm font-bold hover:text-white shadow-sm hover:bg-[var(--green-color)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right column - Image & Contact Info */}
            <div className="flex flex-col space-y-8">
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      location_on
                    </span>
                    <div>
                      <h4 className="font-semibold">Our Location</h4>
                      <p className="text-subtle-light dark:text-subtle-dark">
                        Sukute Resort, Sukute, Sindhupalchok, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      phone
                    </span>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-subtle-light dark:text-subtle-dark">
                        +977-9841234567
                        <br />
                        +977-9849876543
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      email
                    </span>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-subtle-light dark:text-subtle-dark">
                        info@sukuteresort.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 w-full my-16 overflow-hidden rounded-xl shadow-lg">
            <div className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4229841342863!2d85.75782387546727!3d27.70422357618433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ebaf6cc10f0083%3A0x3a706e919ce74d75!2sBhotekoshi%20Beach%20Resort%2C%20Sukute!5e0!3m2!1sen!2snp!4v1759037840066!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                {
                  question: "What are the check-in and check-out times?",
                  answer:
                    "Our standard check-in time is 2:00 PM and check-out is at 12:00 PM. Early check-in or late check-out may be available upon request and subject to availability.",
                },
                {
                  question: "Do you offer packages for corporate events?",
                  answer:
                    "Yes, we have tailored packages for corporate retreats, seminars, and team-building activities. Please contact our events team for more details and a custom quote.",
                },
                {
                  question: "What family-friendly activities are available?",
                  answer:
                    "We offer a range of activities for the whole family, including swimming, easy hiking trails, a children's play area, and various outdoor games. We also organize special events during holiday seasons.",
                },
                {
                  question: "Is there parking available at the resort?",
                  answer:
                    "Yes, we provide ample free parking space for all our guests within the resort premises.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "You can cancel your booking free of charge up to 72 hours before your scheduled arrival date. For cancellations made within 72 hours, a one-night charge will apply. Please refer to your booking confirmation for specific details.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-lg border border-border-light dark:border-border-dark bg-transparent p-4 transition-all duration-300 ease-in-out hover:bg-white/50 dark:hover:bg-white/10"
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h4 className="font-medium">{faq.question}</h4>
                    <span className="material-symbols-outlined plus-icon text-primary">
                      add
                    </span>
                  </summary>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;