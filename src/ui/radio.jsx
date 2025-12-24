import React from "react";

export function Radio({ name, value, checked, onChange, label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-purple-600 border-popx-gray-300 focus:ring-2 focus:ring-purple-400 rounded-full"
      />
      <span className="text-base text-popx-gray-700">{label}</span>
    </label>
  );
}
