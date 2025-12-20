import React from "react";

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl flex items-center justify-center mb-4">
        <div className="text-pink-600">{icon}</div>
      </div>
      <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ValueCard;
