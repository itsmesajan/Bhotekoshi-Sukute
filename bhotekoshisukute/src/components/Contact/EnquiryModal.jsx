import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "../../hooks/useForm";
import ReCaptcha from "../ui/ReCaptcha";

const EnquiryModal = ({ type = "hall", selectedItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
    // enquiry_for will be set dynamically
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
      if (!data.pax) errs.pax = "Number of pax is required.";
    }

    if (type === "package") {
      if (!data.specificRequirement?.trim())
        errs.specificRequirement = "Requirement is required.";
    }
    return errs;
  };

  const { formData, formStatus, formErrors, handleChange, handleSubmit, setFormData, setFormStatus } = useForm(
    initialState,
    validate
  );

  // recaptcha token state
  const [recaptchaToken, setRecaptchaToken] = React.useState(null);

  // when modal opens set enquiry_for in formData (so it is included in submitted JSON)
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, enquiry_for: itemTitle }));
    }
  }, [isOpen, itemTitle, setFormData]);

  // close modal on successful submit
  React.useEffect(() => {
    if (formStatus === "success") {
      setIsOpen(false);
      // reset status after closing to clear any messages
      setTimeout(() => setFormStatus(null), 600);
    }
  }, [formStatus, setFormStatus]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base font-bold text-white hover:bg-[var(--green-color)]"
      >
        Enquiry Now
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-5 shadow-lg max-h-[90vh] overflow-auto">
          <Dialog.Title className="text-xl font-bold mb-4">Enquiry for {itemTitle}</Dialog.Title>

          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                recaptchaToken, // pass the token
                "https://bhotekoshibeach.com/enquery_mail_react.php",
                { requireRecaptcha: false }
              )
            }
            className="space-y-4"
          >
            <input type="hidden" name="enquiry_for" value={itemTitle} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" aria-invalid={!!formErrors.name} />
                {formErrors.name && <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" aria-invalid={!!formErrors.email} />
                {formErrors.email && <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Phone*</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" aria-invalid={!!formErrors.phone} />
                {formErrors.phone && <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Address*</label>
                <input name="address" value={formData.address} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" aria-invalid={!!formErrors.address} />
                {formErrors.address && <p className="text-xs text-red-600 mt-1">{formErrors.address}</p>}
              </div>
            </div>

            {type === "hall" && (
              <>
                <h4 className="font-semibold mt-2">Event Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">Nature of Event*</label>
                    <input name="nature" value={formData.nature} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" />
                    {formErrors.nature && <p className="text-xs text-red-600 mt-1">{formErrors.nature}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Event Date*</label>
                    <input name="eventDate" value={formData.eventDate} onChange={handleChange} type="date" className="mt-1 w-full rounded border px-3 py-2" />
                    {formErrors.eventDate && <p className="text-xs text-red-600 mt-1">{formErrors.eventDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">No. of Pax*</label>
                    <input name="pax" value={formData.pax} onChange={handleChange} type="number" className="mt-1 w-full rounded border px-3 py-2" />
                    {formErrors.pax && <p className="text-xs text-red-600 mt-1">{formErrors.pax}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium">Special Request</label>
                    <textarea name="specialRequest" value={formData.specialRequest} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" rows={3}></textarea>
                  </div>
                </div>
              </>
            )}

            {type === "package" && (
              <>
                <h4 className="font-semibold mt-2">Package Information</h4>
                <div>
                  <label className="block text-sm font-medium">Specific Requirement*</label>
                  <textarea name="specificRequirement" value={formData.specificRequirement} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" rows={3}></textarea>
                  {formErrors.specificRequirement && <p className="text-xs text-red-600 mt-1">{formErrors.specificRequirement}</p>}
                </div>
              </>
            )}

            {/* ReCaptcha must provide token via onChange prop */}
            <ReCaptcha onChange={(token) => setRecaptchaToken(token)} />

            <div className="flex justify-end gap-3 mt-4">
              <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded border">Cancel</button>
              <button type="submit" className="px-5 py-2 rounded bg-[var(--primary-color)] text-white">Submit</button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default EnquiryModal;
