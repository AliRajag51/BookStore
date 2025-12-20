import React from "react";

function Button({ children, className = "", type = "button", ...props }) {
  const baseClasses =
    "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition px-10 py-2";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
