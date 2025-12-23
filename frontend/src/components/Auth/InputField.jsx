import React from "react";

function InputField({
  label,
  name,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  rightElement,
  required = false,
  className = "",
  error,
}) {
  const inputId = id || name;
  const baseClassName =
    "w-full pl-10 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-black";
  const inputClassName = rightElement
    ? `${baseClassName} pr-12 ${className}`
    : `${baseClassName} ${className}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName.trim()}
          required={required}
          aria-invalid={Boolean(error)}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
