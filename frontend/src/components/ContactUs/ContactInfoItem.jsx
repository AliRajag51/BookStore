import React from "react";

function ContactInfoItem({ icon, title, details, subtitle }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-1">{details}</p>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default ContactInfoItem;
