import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="6LflBQgsAAAAAEJcgi4mwrDVu_Ng1Lbw1TZ4NqKn"
      // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // replace with your actual sitekey
      onChange={onChange}
    />
  );
};

export default ReCaptcha;
