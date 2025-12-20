import React from "react";

function StatCard({ icon, value, label, colorClass }) {
  return (
    <div className={`${colorClass} rounded-2xl shadow-lg p-6 text-center border border-transparent hover:border-pink-200 transition-all`}>
      <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <div className="text-pink-600">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default StatCard;
