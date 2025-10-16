import React, { useState } from "react";
import ReCaptcha from "./ReCaptcha";
import FormField from "./FormField";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle Submit
  const handleSubmit = async (e, recaptchaToken, apiUrl) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Replace with actual API call
      // await new Promise((resolve) => setTimeout(resolve, 1500));

      // Actual API call
        const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message || "✅ Message sent successfully!",
        });
        setFormData(initialState);
      } else {
        setStatus({
          type: "error",
          message: result.message || "❌ Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "❌ Unable to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

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

      <form onSubmit={(e)=>
        handleSubmit(e,recaptchaToken,"https://bhotekoshibeach.com/enquery_mail_react.php")
      } 
      noValidate 
      className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your Name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Your Email"
          />
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          placeholder="Subject"
        />

        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Your Message"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <ReCaptcha onChange={handleRecaptchaChange} />
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[var(--primary-color)] hover:bg-[var(--green-color)]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
