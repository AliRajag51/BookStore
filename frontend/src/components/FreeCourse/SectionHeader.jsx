import React from "react";

function SectionHeader({ badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (
        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
