import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base font-bold text-[var(--secondary-color)] hover:text-white transition-all hover:bg-[var(--green-color)]"
      >
        Enquiry Now
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg dark:bg-background-dark">
          <Dialog.Title className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
            Enquiry Now
          </Dialog.Title>

          <form className="space-y-4">
            {/* Personal Information */}
            <h3 className="font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone*</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Address*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Event Information */}
            <h3 className="font-semibold mt-4">Event Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Nature of Event*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Event Date*</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">No. of Pax*</label>
                <input
                  type="number"
                  className="mt-1 w-full rounded border px-3 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Special Request</label>
                <textarea
                  className="mt-1 w-full rounded border px-3 py-2"
                  rows={3}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded bg-[var(--primary-color)] text-white hover:bg-[var(--green-color)]"
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
