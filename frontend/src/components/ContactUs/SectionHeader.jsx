import React from "react";

function SectionHeader({ badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium mb-4">
        {badge}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

export default SectionHeader;
