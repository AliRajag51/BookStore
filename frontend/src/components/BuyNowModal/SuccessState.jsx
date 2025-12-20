import React from "react";
import { Check } from "lucide-react";

function SuccessState({ course, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase Successful!</h3>
        <p className="text-gray-600 mb-6">
          Your purchase of <span className="font-semibold">{course.title}</span> was successful.
        </p>
        <div className="space-y-4">
          <button className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition">
            Download Now
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessState;
