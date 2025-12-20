import React from "react";
import { Shield } from "lucide-react";

function PricingBox() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">Course Price</span>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">$0</div>
          <div className="text-gray-500 line-through text-sm">$49.99</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <Shield className="w-5 h-5" />
        <span className="text-sm">100% Free - No payment required</span>
      </div>
    </div>
  );
}

export default PricingBox;
