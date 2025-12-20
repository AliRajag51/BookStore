import React from "react";

function MissionCard({ icon, title, description, className = "" }) {
  return (
    <div className={`bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border ${className}`.trim()}>
      <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default MissionCard;
