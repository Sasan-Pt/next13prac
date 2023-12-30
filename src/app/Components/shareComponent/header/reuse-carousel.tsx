import React, { FC, useEffect, useRef, useState, ReactNode } from "react";
import { DateType } from "./date-carousel";

type Props = {
  data: DateType[];
  width?: string;
};

const ReuseCarousel: FC<Props> = ({ data, width }) => {
  const [move, setMove] = useState<number>(1);
  const [movingState, setMovingState] = useState<number>(3);
  const [size, setSize] = useState<number>(1);
  const [heightHolder, setHeightHolder] = useState<number>(1);
  const [movingCarousel, setMovingCarousel] =
    useState<string>("-translate-x-[0px]");

  const [testolf, setTestolf] = useState<any>();

  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref && ref?.current?.children[0]) {
      setHeightHolder(ref?.current?.children[0].getBoundingClientRect().height);
      setSize(
        () =>
          ref?.current?.children[0].getBoundingClientRect().width || undefined
      );
      const ulinfoChildren = ref?.current || undefined;
    }
  }, [ref, size, ref?.current?.children]);

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
    <div className="flex  w-full relative  h-full">
      <div className={` ${width} mx-auto`}>
        <div className={` relative text-white w-full`}>
          <button
            className={`absolute   -right-[30px] bg-white w-[3%]  h-[${heightHolder}px] mt-2 bg-opacity-50`}
            onClick={(e) => MovingCarousel()}
          >
            sd
          </button>
          <div className="absolute w-full flex space-x-6 overflow-hidden ">
            <ul
              className={`list-none  flex  w-full`}
              ref={ref}
              onClick={(e) => setingMovingCarousel(e)}
            >
              {data.map((x, index) => {
                return (
                  <li
                    key={Math.random()}
                    className={`mt-2 bg-red-600 mr-4 shadow-sm ]]`}
                    style={{ left: size * index + "px" }}
                  >
                    <div className="flex flex-col items-center justify-center w-[100px]">
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
            className={`absolute -left-[30px] bg-white w-[3%] h-[${heightHolder}px] mt-2 bg-opacity-50`}
            onClick={(e) => MovingCarousel()}
          >
            sadsd
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReuseCarousel;
