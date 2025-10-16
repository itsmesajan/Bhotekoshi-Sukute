import React from "react";
import { IoMdCloseCircle, IoMdCheckmarkCircle, IoMdSync } from "react-icons/io";

const Toast = ({ formStatus }) => {
  if (!formStatus) return null;

  return (
    <div
      className={`${
        formStatus === "success"
          ? "bg-green-200 text-green-700"
          : formStatus === "error" || formStatus === "recaptchaError"
          ? "bg-red-200 text-red-700"
          : "bg-yellow-100 text-yellow-700"
      } font-bold max-w-sm mx-auto fixed top-16 left-4 right-4 p-4 rounded-md shadow-lg flex items-center gap-4 z-[99] transition-opacity duration-300 ease-in-out transform ${
        formStatus ? "scale-100" : "scale-0"
      }`}
    >
      {formStatus === "success" && <IoMdCheckmarkCircle />}
      {formStatus === "error" && <IoMdCloseCircle />}
      {formStatus === "recaptchaError" && <IoMdCloseCircle />}
      {formStatus === "loading" && <IoMdSync className="animate-spin" />}
      {formStatus === "success"
        ? " Your message has been sent successfully!"
        : formStatus === "error"
        ? "Unable to send message. Please try again."
        : formStatus === "recaptchaError"
        ? "Please complete the reCAPTCHA."
        : "Loading..."}
    </div>
  );
};

export default Toast;
