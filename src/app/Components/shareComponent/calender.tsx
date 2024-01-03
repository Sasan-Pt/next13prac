"use client";
import { useEffect, useRef, useState } from "react";
import DateCarousel from "./header/date-carousel";

const Calender = () => {
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const [objectSizeToArray, setObjectSizeToArray] = useState<any>();

  const [carouselIndex, setCarouselIndex] = useState();
  const mockData = [
    { time: "06:30", name: "whatever", episode: "???" },
    { time: "06:30", name: "whatever", episode: "???" },
    { time: "06:30", name: "whatever", episode: "???" },
  ];

  return (
    <div className="bg-[#202020]">
      <DateCarousel />
      {mockData.map((node) => (
        <div className="flex justify-between mt-4 bg-gray-600 text-white px-2">
          <div>
            <div>{node.time}</div>
            <div>{node.name}</div>
          </div>
          <div>{node.episode}</div>
        </div>
      ))}
    </div>
  );
};
export default Calender;
