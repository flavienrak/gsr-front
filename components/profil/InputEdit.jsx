import React from "react";

export default function InputEdit({ value, label }) {
  return (
    <div className=" flex w-full flex-col gap-1">
      <label htmlFor="nom" className="text-gray-200 text-sm">
        {label}
      </label>
      <input
        type="text"
        className="bg-gray-200/10  px-2 py-2 outline-none rounded-sm"
        name=""
        value={value}
        id=""
      />
    </div>
  );
}
