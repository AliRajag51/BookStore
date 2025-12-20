import React from "react";
import { Check } from "lucide-react";

function BenefitList({ items }) {
  return (
    <div>
      <h4 className="font-bold text-lg mb-4">What you'll get:</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BenefitList;
