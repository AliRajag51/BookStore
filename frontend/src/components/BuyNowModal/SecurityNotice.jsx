import React from "react";
import { Lock } from "lucide-react";

function SecurityNotice({ text }) {
  return (
    <div className="flex items-center gap-2 text-gray-600 mb-6">
      <Lock className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default SecurityNotice;
