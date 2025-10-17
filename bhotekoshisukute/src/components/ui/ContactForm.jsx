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
  // // Validation
  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = "Name is required.";
  //   if (!formData.email.trim()) newErrors.email = "Email is required.";
  //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
  //     newErrors.email = "Enter a valid email.";
  //   if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
  //   if (!formData.message.trim()) newErrors.message = "Message is required.";
  //   return newErrors;
  // };

  const { formData, formStatus, handleChange, handleSubmit } = useForm(
    initialState
  );

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <section>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        Send Us a Message
      </h3>

      {status && (
        <div
          className={`p-4 mb-5 text-sm font-medium rounded-lg border-l-4 ${
            status.type === "success"
              ? "bg-green-100 border-green-500 text-green-800"
              : "bg-red-100 border-red-500 text-red-800"
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}

      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            recaptchaToken,
            "https://bhotekoshibeach.com/enquery_mail_react.php"
          )
        }
        noValidate
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={
              formStatus === "error" ? "Please fill all required fields" : ""
            }
            placeholder="Your Name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={
              formStatus === "error" ? "Please fill all required fields" : ""
            }
            placeholder="Your Email"
          />
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={
            formStatus === "error" ? "Please fill all required fields" : ""
          }
          placeholder="Subject"
        />

        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          error={
            formStatus === "error" ? "Please fill all required fields" : ""
          }
          placeholder="Your Message"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <ReCaptcha onChange={handleRecaptchaChange} />
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className={`w-full sm:w-auto px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 ${
              formStatus === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[var(--primary-color)] hover:bg-[var(--green-color)]"
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
