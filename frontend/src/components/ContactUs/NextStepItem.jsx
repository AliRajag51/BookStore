import React from "react";

function NextStepItem({ index, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-bold">
        {index}
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default NextStepItem;
