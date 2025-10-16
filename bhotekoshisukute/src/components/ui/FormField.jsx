import React from "react";

const FormField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  rows,
}) => {
  const InputTag = as;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} <span className="text-red-600">*</span>
      </label>
      <InputTag
        id={name}
        name={name}
        type={type}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`block w-full rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } bg-gray-50 py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
