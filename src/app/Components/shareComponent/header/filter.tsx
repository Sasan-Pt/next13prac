"use client";
import React from "react";
import BaseMultipSelect from "./BasemultipSelect";
import SearchIcon from "@mui/icons-material/Search";
import { MultipSelect } from "./multipSelect";

const QuickFilter = () => {
  return (
    <div className="bg-[#202020] mt-6 w-full p-4 space-y-2">
      <div className="text-white leading-9 text-[16px]">Quick Filter</div>
      <MultipSelect />

      <div className="bg-[#292929] flex h-10 w-full">
        <div className="flex justify-center items-center w-full ">
          <input className=" bg-[#292929] text-[#d8e0f2] h-4 pl-12 w-full" />
        </div>
      </div>
      <button className="w-full bg-purple-600">filter</button>
    </div>
  );
};

export default QuickFilter;
