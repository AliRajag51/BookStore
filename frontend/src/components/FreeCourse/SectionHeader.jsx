import React from "react";

// Reusable section heading component
// Isko kisi bhi section ke upar use kar sakte ho
function SectionHeader({ badge, title, description }) {
  return (
    // Centered container with max width
    <div className="text-center max-w-3xl mx-auto">

      {/* Badge show hoga sirf jab badge prop mile */}
      {badge && (
        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
          {badge}
        </span>
      )}

      {/* Main section title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Description sirf tab render hogi jab description mile */}
      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
