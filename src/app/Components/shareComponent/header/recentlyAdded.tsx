import React from "react";
import logo from "../../../../../public/logo.png";
import Image from "next/image";

const RecentlyAdded = () => {
  const dummyData = [
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
  ];
  return (
    <div className="bg-[#202020] mt-6 w-full p-4 space-y-2">
      <div className="flex justify-between text-white">
        recently Added
        <button>view all</button>
      </div>
      <div className="flex flex-wrap  w-36">
        {dummyData.map((x, index) => {
          return (
            <div key={index}>
              <Image src={x.image} className="w-full h-auto" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyAdded;
