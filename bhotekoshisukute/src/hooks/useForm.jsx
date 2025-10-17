import { useState } from "react";

export const useForm = (initialState, validate) => {
    const [formData, setFormData] = useState(initialState);
    const [formStatus, setFormStatus] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e, recaptchaToken, url) => {
      e.preventDefault();
  
      if (!validate(formData)) { // <-- use external validate
        setFormStatus("error");
        setTimeout(() => setFormStatus(null), 3000);
        return;
      }
  
      if (!recaptchaToken) {
        setFormStatus("recaptchaError");
        setTimeout(() => setFormStatus(null), 3000);
        return;
      }
  
      try {
        setFormStatus("loading");
  
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, "g-recaptcha-response": recaptchaToken }),
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setFormStatus("success");
            setFormData(initialState);
          } else {
            setFormStatus("error");
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
  
    return { formData, formStatus, handleChange, handleSubmit, setFormStatus };
  };
  