import React, { useEffect, useState } from "react";
import ReuseCarousel from "./reuse-carousel";

export interface DateType {
  date?: number;
  message?: string[];
  monthName?: string;
}

const DateCarousel = () => {
  const [dates, setDates] = useState<DateType[]>([]);
  const [currentTime, setCurrentTime] = useState<Date>();
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    setCurrentTime(() => {
      return new Date();
    });
  }, []);

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

  const year = 2023;
  const month = 2;
  const daysInMonth = getDaysInMonth(year, month);

  function getMonthName(month: number) {
    const date = new Date(2000, month, 1);
    const options = { month: "long" };
    return date.toLocaleString("en-US", options as Intl.DateTimeFormatOptions);
  }

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
    <>
      <span>
        <h1 className="text-white">Estemated Time</h1>
        <div className="text-white">{userLocalTime}</div>
      </span>
      <ReuseCarousel
        data={dates}
        width={"w-[94%]"}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export default DateCarousel;
