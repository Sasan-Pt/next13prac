"use client";
import { useEffect, useRef, useState } from "react";
import DateCarousel from "./header/date-carousel";

export interface TestaItem {
  date?: number;
  message?: string[];
  monthName?: string;
}
const Calender = () => {
  const [dates, setDates] = useState<TestaItem[]>([]);
  const [currentTime, setCurrentTime] = useState<Date>();
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const [objectSizeToArray, setObjectSizeToArray] = useState<any>();

  const [carouselIndex, setCarouselIndex] = useState();

  useEffect(() => {
    setCurrentTime(() => {
      return new Date();
    });
  }, []);

  console.log(currentTime);
  console.log(currentTime?.getDate());
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = { timeZone: userTimeZone };
  const userLocalTime = currentTime?.toLocaleString(undefined, options);
  const test = currentTime?.getDate();

  function getDaysInMonth(year: number, month: number) {
    const numDays = new Date(year, month, 0).getDate();
    const days = [];

    for (let i = 1; i <= numDays; i++) {
      days.push(i);
    }

    return days;
  }

  // Example usage
  const year = 2023;
  const month = 2; // Note: January is month 0, February is month 1, and so on
  const daysInMonth = getDaysInMonth(year, month);

  function getMonthName(month: number) {
    const date = new Date(2000, month, 1);
    const options = { month: "long" };
    return date.toLocaleString("en-US", options as Intl.DateTimeFormatOptions);
  }

  // Example usage
  // Note: January is month 0, February is month 1, and so on

  const monthName = getMonthName(month);
  const message = ["sdasdasd"];

  useEffect(() => {
    for (let i = 1; i <= daysInMonth.length + 1; i++) {
      setDates((prevState) => [
        ...prevState,
        { date: i, message: message.filter((h) => h[i]), monthName: monthName },
      ]);
    }
  }, [openCalender]);

  return (
    <div className="bg-[#202020]">
      <span>
        <h1 className="text-white">Estemated Time</h1>
        <div className="text-white">{userLocalTime}</div>
        <DateCarousel data={dates} width={"w-[94%]"} />
      </span>
    </div>
  );
};
export default Calender;
