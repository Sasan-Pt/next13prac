"use client";
import { useEffect, useRef, useState } from "react";
import { left } from "@popperjs/core";

interface TestaItem {
  date: number;
  message: string[];
  monthName: string;
}
const Calender = () => {
  const [testa, setTesta] = useState<TestaItem[]>([]);
  const [currentTime, setCurrentTime] = useState<Date>();
  const [testolf, setTestolf] = useState<any>();
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const [objectSizeToArray, setObjectSizeToArray] = useState<any>();
  const [size, setSize] = useState<number>(1);
  const [movingCarousel, setMovingCarousel] =
    useState<string>("-translate-x-[0px]");
  const [carouselIndex, setCarouselIndex] = useState();
  const [move, setMove] = useState<any>(1);
  const [testNumber, setTestNumber] = useState<any>(3);
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

  // Example usage
  const year = 2023;
  const month = 2; // Note: January is month 0, February is month 1, and so on
  const daysInMonth = getDaysInMonth(year, month);

  function getMonthName(month: number) {
    const date = new Date(2000, month, 1);
    const options = { month: "long" };
    return date.toLocaleString("en-US", options);
  }

  // Example usage
  // Note: January is month 0, February is month 1, and so on

  const monthName = getMonthName(month);
  const message = ["sdasdasd"];

  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref?.current?.children[0]) {
      setSize(
        () =>
          ref?.current?.children[0].getBoundingClientRect().width || undefined
      );
      const ulinfoChildren = ref?.current || undefined;

      //setObjectSizeToArray(()=>{return Object.values(ulinfoChildren)})
    }
    for (let i = 1; i <= daysInMonth.length + 1; i++) {
      setTesta((prevState) => [
        ...prevState,
        { date: i, message: message.filter((h) => h[i]), monthName: monthName },
      ]);
    }
  }, [openCalender, ref, ref.current]);

  if (ref && testolf) {
    testolf?.forEach((slide: HTMLLinkElement, index: number) => {
      slide.style.left = size * index + "px";
    });
  }

  const setingMovingCarousel = (e) => {
    const sizeWithOutPixel = Number(e.style.left.split("px")[0]);
    ref.current.style.transform =
      "translateX(-" + sizeWithOutPixel + "px" + ")";
    console.log(sizeWithOutPixel);
    const numberak = sizeWithOutPixel * 9;
    setMovingCarousel("-translate-x-[" + e.style.left + "px]");
    console.log(movingCarousel);
  };
  const tests = () => {
    if (move === 1) {
      ref.current.style.transform = "translateX(-" + 64.921875 * 2 + "px" + ")";
      setTestNumber((prevState) => prevState + 1);
      setMove(size * testNumber);
    } else {
      setTestNumber((prevState) => prevState + 1);
      setMove(size * testNumber);
      ref.current.style.transform = "translateX(-" + move + "px" + ")";
    }
  };

  return (
    <div className="bg-[#202020]">
      <span>
        <h1 className="text-white">Estemated Time</h1>
        <div className="text-white">{userLocalTime}</div>
        <button onClick={tests}>click me bitch</button>
      </span>
      <div className="flex  w-full relative">
        <div className=" w-1/2 mx-auto">
          <div className=" relative text-white  ">
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-9 bg-white"
              onClick={(e) => console.log(e.target)}
            >
              sdgssagfsg
            </button>
            <div className="absolute w-full flex space-x-6 overflow-hidden ">
              <ul
                className={`list-none  flex  w-full`}
                ref={ref}
                onClick={(e) => setingMovingCarousel(e.target)}
              >
                {testa.map((x, index) => {
                  return (
                    <li
                      key={Math.random()}
                      className={`mt-2 bg-red-600 mr-4 shadow-sm`}
                      style={{ left: size * index + "px" }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>{x.monthName}</div>
                        <div>{x.message}</div>
                        <div>{x.date}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              className="absolute top-1/2 -translate-y-1/2 -left-9 bg-white"
              onClick={(e) => tests()}
            >
              sadsd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calender;
