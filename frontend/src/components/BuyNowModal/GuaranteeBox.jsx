import React from "react";
import { Shield } from "lucide-react";

function GuaranteeBox() {
  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
      <div className="flex items-start gap-3">
        <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
        <div>
          <h5 className="font-semibold text-blue-900">Money Back Guarantee</h5>
          <p className="text-sm text-blue-700 mt-1">
            Even though this course is free, we offer a satisfaction guarantee on all our paid courses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeBox;
