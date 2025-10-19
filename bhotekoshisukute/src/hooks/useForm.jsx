import { useState } from "react";

export const useForm = (initialState, validate) => {
    const [formData, setFormData] = useState(initialState);
    const [formStatus, setFormStatus] = useState(null); // 'loading' | 'success' | 'error' | 'recaptchaError'
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
  const handleSubmit = async (e, recaptchaToken = null, url = "/api/form", opts = {}) => {
    if (e && e.preventDefault) e.preventDefault();

    const errors = validate ? validate(formData) : {};
    if (errors && Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    } else {
      setFormErrors({});
    }

    if (opts.requireRecaptcha && !recaptchaToken) {
      setFormStatus("recaptchaError");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
  
    try {
      setFormStatus("loading");

      const body = { ...formData };
      if (recaptchaToken) body["g-recaptcha-response"] = recaptchaToken;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        let data = {};
        try {
          data = await response.json();
        } catch {
          data = {};
        }
        if (data.success === false) {
          setFormStatus("error");
        } else {
          setFormStatus("success");
          setFormData(initialState);
        }
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus(null), 3000);
    }
  };
  
  return {
    formData,
    formStatus,
    formErrors,
    handleChange,
    handleSubmit,
    setFormStatus,
    setFormErrors,
    setFormData,
  };
};
  