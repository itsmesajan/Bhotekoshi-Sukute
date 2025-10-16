import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="6LcsfeEpAAAAAAjCRjI5pZtDiw6pdmXpPlTxhSm8"
      // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // replace with your actual sitekey
      onChange={onChange}
    />
  );
};

export default ReCaptcha;
