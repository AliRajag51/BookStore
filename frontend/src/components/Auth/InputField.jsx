import React from "react";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  rightElement,
  required = false,
  className = "",
}) {
  const baseClassName =
    "w-full pl-10 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-black";
  const inputClassName = rightElement
    ? `${baseClassName} pr-12 ${className}`
    : `${baseClassName} ${className}`;

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName.trim()}
          required={required}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
