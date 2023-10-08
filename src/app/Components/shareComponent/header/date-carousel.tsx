import React, { FC, useEffect, useRef, useState, ReactNode } from "react";
import { TestaItem } from "../calender";

type Props = {
  data: TestaItem[];
};

const DateCarousel: FC<Props> = ({ data }) => {
  const [move, setMove] = useState<number>(1);
  const [movingState, setMovingState] = useState<number>(3);
  const [size, setSize] = useState<number>(1);
  const [movingCarousel, setMovingCarousel] =
    useState<string>("-translate-x-[0px]");

  const [testolf, setTestolf] = useState<any>();

  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref && ref?.current?.children[0]) {
      setSize(
        () =>
          ref?.current?.children[0].getBoundingClientRect().width || undefined
      );
      const ulinfoChildren = ref?.current || undefined;

      //setObjectSizeToArray(()=>{return Object.values(ulinfoChildren)})
    }
  }, [ref, ref.current, size]);

  const setingMovingCarousel = (e: any) => {
    const sizeWithOutPixel = Number(e.style.left.split("px")[0]);
    ref.current
      ? (ref.current.style.transform =
          "translateX(-" + sizeWithOutPixel + "px" + ")")
      : null;
    console.log(sizeWithOutPixel);
    const numberak = sizeWithOutPixel * 9;
    setMovingCarousel("-translate-x-[" + e.style.left + "px]");
  };

  const MovingCarousel = () => {
    if (move === 1 && ref.current) {
      ref.current.style.transform = "translateX(-" + 64.921875 * 2 + "px" + ")";
      setMovingState((prevState) => prevState + 1);
      setMove(size * movingState);
    } else {
      setMovingState((prevState) => prevState + 1);
      setMove(size * movingState);
      ref.current
        ? (ref.current.style.transform = "translateX(-" + move + "px" + ")")
        : null;
    }
  };

  if (ref && testolf) {
    testolf?.forEach((slide: HTMLLinkElement, index: number) => {
      slide.style.left = size * index + "px";
    });
  }

  return (
    <div className="flex  w-full relative">
      <div className=" w-1/2 mx-auto">
        <div className=" relative text-white  ">
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-9 bg-white"
            onClick={(e) => MovingCarousel()}
          >
            sdgssagfsg
          </button>
          <div className="absolute w-full flex space-x-6 overflow-hidden ">
            <ul
              className={`list-none  flex  w-full`}
              ref={ref}
              onClick={(e) => setingMovingCarousel(e.target)}
            >
              {data.map((x, index) => {
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
            onClick={(e) => MovingCarousel()}
          >
            sadsd
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateCarousel;
