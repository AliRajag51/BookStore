import React from "react";

function ModalHeader({ title, subtitle, onClose, icon }) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition">
        {icon}
      </button>
    </div>
  );
}

export default ModalHeader;
