import React, { useState } from "react";
import ReCaptcha from "./ReCaptcha";
import FormField from "./FormField";
import { useForm } from "../../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Name is required.";
    if (!formData.email?.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.subject?.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message?.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const { formData, formStatus, formErrors, handleChange, handleSubmit } = useForm(
    initialState,
    validate
  );

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  return (
    <section>
      {formStatus === "success" && (
        <div className="p-3 mb-4 text-sm text-green-800 bg-green-100 rounded">Message sent successfully.</div>
      )}
      {formStatus === "error" && (
        <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded">Please fix the errors and try again.</div>
      )}
      {formStatus === "recaptchaError" && (
        <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded">Please complete the reCAPTCHA.</div>
      )}
  <h3 class="text-2xl font-bold mb-4">Send Us a Message</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            recaptchaToken,
            "https://mayurstay.com/bhotekoshi/enquiry_mail_react.php",
            { requireRecaptcha: false }
          )
        }
        noValidate
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            placeholder="Your Name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            placeholder="you@domain.com"
          />
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={formErrors.subject}
          placeholder="Subject"
        />

        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          error={formErrors.message}
          placeholder="Your message"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <ReCaptcha onChange={(token) => setRecaptchaToken(token)} />
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className={`px-6 py-3 rounded font-semibold text-white ${
              formStatus === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--primary-color)] hover:bg-[var(--green-color)]"
            }`}
          >
            {formStatus === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
