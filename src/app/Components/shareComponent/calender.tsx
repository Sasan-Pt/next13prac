"use client";
import { useEffect, useRef, useState } from "react";
import DateCarousel from "./header/date-carousel";

const Calender = () => {
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const [objectSizeToArray, setObjectSizeToArray] = useState<any>();

  const [carouselIndex, setCarouselIndex] = useState();

  return (
    <div className="bg-[#202020]">
      <DateCarousel />
      <div>asdasd</div>
    </div>
  );
};
export default Calender;
