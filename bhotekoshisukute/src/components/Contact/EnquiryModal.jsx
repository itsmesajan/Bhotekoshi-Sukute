import React, { useState } from "react";
import { Dialog } from "@headlessui/react";


const EnquiryModal = ({ type = "hall", selectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  // For displaying hall or package name
  const itemTitle =
    selectedItem?.title ||
    (type === "hall" ? "Hall Enquiry" : "Package Enquiry");

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
      >
        <Dialog.Panel className="w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg bg-white p-4 sm:p-6 shadow-lg dark:bg-background-dark overflow-y-auto max-h-[90vh]">
          {/* Title */}
          <Dialog.Title className="text-xl sm:text-2xl font-bold text-[var(--secondary-color)] mb-4 text-center sm:text-left">
            Enquiry for {itemTitle}
          </Dialog.Title>

          <form className="space-y-4">
            {/* Hidden field for backend */}
            <input type="hidden" name="enquiry_for" value={itemTitle} />

            {/* Personal Information */}
            <h3 className="font-semibold text-base sm:text-lg">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone*</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Address*</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Conditional Fields */}
            {type === "hall" && (
              <>
                <h3 className="font-semibold mt-4 text-base sm:text-lg">
                  Event Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Nature of Event*
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Event Date*
                    </label>
                    <input
                      type="date"
                      className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      No. of Pax*
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium">
                      Special Request
                    </label>
                    <textarea
                      className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </>
            )}

            {type === "package" && (
              <>
                <h3 className="font-semibold mt-4 text-base sm:text-lg">
                  Package Information
                </h3>
                <div>
                  <label className="block text-sm font-medium">
                    Specific Requirement*
                  </label>
                  <textarea
                    className="mt-1 w-full rounded border px-3 py-2 text-sm sm:text-base"
                    rows={3}
                    required
                  ></textarea>
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded border hover:bg-gray-100 w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded bg-[var(--primary-color)] text-white hover:bg-[var(--green-color)] w-full sm:w-auto"
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
