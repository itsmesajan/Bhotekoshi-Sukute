import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "../../hooks/useForm";
import ReCaptcha from "../ui/ReCaptcha";
import { Calendar } from "primereact/calendar";

const EnquiryModal = ({ type = "hall", selectedItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState(null);

  const itemTitle =
    selectedItem?.title || (type === "hall" ? "Hall Enquiry" : "Package Enquiry");

  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    nature: "",
    eventDate: "",
    pax: "",
    specialRequest: "",
    specificRequirement: "",
  };

  const validate = (data) => {
    const errs = {};
    if (!data.name?.trim()) errs.name = "Name is required.";
    if (!data.email?.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email.";
    if (!data.phone?.trim()) errs.phone = "Phone is required.";
    if (!data.address?.trim()) errs.address = "Address is required.";

    if (type === "hall") {
      if (!data.nature?.trim()) errs.nature = "Nature of event is required.";
      if (!data.eventDate) errs.eventDate = "Event date is required.";
      else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selected = new Date(data.eventDate);
        if (selected < today) errs.eventDate = "Past dates are not allowed.";
      }
      if (!data.pax) errs.pax = "Number of pax is required.";
    }

    if (type === "package" && !data.specificRequirement?.trim()) {
      errs.specificRequirement = "Requirement is required.";
    }

    return errs;
  };

  const {
    formData,
    formStatus,
    formErrors,
    handleChange,
    handleSubmit,
    setFormData,
    setFormStatus,
  } = useForm(initialState, validate);

  React.useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        enquiry_for: itemTitle,
        enquiry_for_id: selectedItem?.id ?? "",
      }));
    }
  }, [isOpen, itemTitle, setFormData, selectedItem?.id]);

  React.useEffect(() => {
    if (formStatus === "success") {
      setIsOpen(false);
      setTimeout(() => setFormStatus(null), 600);
    }
  }, [formStatus, setFormStatus]);

  return (
    <div>
      {/* 🔘 Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base font-bold text-[var(--secondary-color)] hover:text-white hover:bg-[var(--green-color)] transition-all"
      >
        Enquiry Now
      </button>

      {/* 🧩 Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      >
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-5 shadow-lg max-h-[90vh] overflow-auto">
          <Dialog.Title className="text-xl font-bold mb-4 text-center sm:text-left">
            Enquiry for {itemTitle}
          </Dialog.Title>

          <form
            onSubmit={(e) => {
              const endpoint =
                type === "package"
                  ? "https://mayurstay.com/bhotekoshi/enquiry_mail_offer.php"
                  : "https://mayurstay.com/bhotekoshi/enquiry_mail_hall_react.php";
              handleSubmit(e, recaptchaToken, endpoint, {
                requireRecaptcha: false,
              });
            }}
            className="space-y-4"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="enquiry_for" value={itemTitle} />
            <input type="hidden" name="enquiry_for_id" value={selectedItem?.id ?? ""} />

            {/* 🧍 Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Name*", name: "name" },
                { label: "Email*", name: "email", type: "email" },
                { label: "Phone*", name: "phone", type: "tel" },
                { label: "Address*", name: "address" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium">{field.label}</label>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    aria-invalid={!!formErrors[field.name]}
                  />
                  {formErrors[field.name] && (
                    <p className="text-xs text-red-600 mt-1">{formErrors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* 🎉 Hall Enquiry Section */}
            {type === "hall" && (
              <>
                <h4 className="font-semibold mt-3">Event Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">Nature of Event*</label>
                    <input
                      name="nature"
                      value={formData.nature}
                      onChange={handleChange}
                      className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    />
                    {formErrors.nature && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.nature}</p>
                    )}
                  </div>

                  {/* 📅 Calendar */}
                  <div>
                    <label className="block text-sm font-medium">Event Date*</label>
                    <Calendar
                      value={formData.eventDate ? new Date(formData.eventDate) : null}
                      onChange={(e) => {
                        const selectedDate = e.value;
                        if (selectedDate) {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          if (selectedDate < today) {
                            alert("You cannot select a past date.");
                            return;
                          }
                          const isoDate = selectedDate.toISOString().split("T")[0];
                          handleChange({
                            target: { name: "eventDate", value: isoDate },
                          });
                        } else {
                          handleChange({ target: { name: "eventDate", value: "" } });
                        }
                      }}
                      showIcon
                      dateFormat="yy-mm-dd"
                      placeholder="YYYY-MM-DD"
                      className="mt-1 w-full rounded border text-sm"
                      minDate={new Date()} // ✅ disables past dates visually
                      inputClassName="w-full px-3 py-2 text-sm rounded border"
                      popupClassName="rounded shadow-lg"
                    />
                    {formErrors.eventDate && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.eventDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">No. of Pax*</label>
                    <input
                      name="pax"
                      value={formData.pax}
                      onChange={handleChange}
                      type="number"
                      className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    />
                    {formErrors.pax && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.pax}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium">Special Request</label>
                    <textarea
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleChange}
                      className="mt-1 w-full rounded border px-3 py-2 text-sm"
                      rows={3}
                    />
                  </div>
                </div>
              </>
            )}

            {/* 📦 Package Enquiry Section */}
            {type === "package" && (
              <>
                <h4 className="font-semibold mt-3">Package Information</h4>
                <div>
                  <label className="block text-sm font-medium">Specific Requirement*</label>
                  <textarea
                    name="specificRequirement"
                    value={formData.specificRequirement}
                    onChange={handleChange}
                    className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    rows={3}
                  />
                  {formErrors.specificRequirement && (
                    <p className="text-xs text-red-600 mt-1">
                      {formErrors.specificRequirement}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* 🔒 ReCaptcha */}
            <ReCaptcha onChange={(token) => setRecaptchaToken(token)} />

            {/* 🟢 Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded border text-sm w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded bg-[var(--primary-color)] text-white text-sm w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default EnquiryModal;
