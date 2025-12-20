import React from "react";
import { CheckCircle } from "lucide-react";

function SuccessMessage({ title, description }) {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6 text-center">
      <CheckCircle className="w-12 h-12 text-pink-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default SuccessMessage;
