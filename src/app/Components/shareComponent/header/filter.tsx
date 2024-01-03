"use client";
import React from "react";
import BaseMultipSelect from "./BasemultipSelect";
const mockdata = [
  { label: "ds", value: "bye" },
  { label: "hj", value: "why" },
  { label: "46", value: "damn" },
  { label: ";k", value: "it" },
];

const QuickFilter = () => {
  return (
    <div className="bg-[#202020] mt-6">
      <BaseMultipSelect
        data={mockdata}
        defaultValue="i dont know"
        onSelect={() => console.log("hi")}
        value={[]}
      />
    </div>
  );
};

export default QuickFilter;
