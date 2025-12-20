import React from "react";
import { CreditCard } from "lucide-react";

function PaymentOption({
  value,
  label,
  icon,
  isSelected,
  onChange,
  name = "payment",
}) {
  return (
    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400">
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
        className="w-5 h-5 text-black"
      />
      {icon || <CreditCard className="w-6 h-6 text-gray-600" />}
      <span className="flex-1">{label}</span>
    </label>
  );
}

export default PaymentOption;
