import React, { FC, useEffect, useRef, useState, ReactNode } from "react";
import { DateType } from "./date-carousel";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { SetStateAction } from "react";

type Props = {
  data: DateType[];
  width?: string;
  setSelectedDate: React.Dispatch<SetStateAction<undefined>>;
};

const ReuseCarousel: FC<Props> = ({ data, width, setSelectedDate }) => {
  const [move, setMove] = useState<number>(1);
  const [movingState, setMovingState] = useState<number>(0);
  const [size, setSize] = useState<number>(1);
  const [heightHolder, setHeightHolder] = useState<number>(1);
  const [movingCarousel, setMovingCarousel] =
    useState<string>("-translate-x-[0px]");
  const [selectedIndex, setSelectedIndex] = useState<number>();

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

  const setingMovingCarousel = (index: any) => {
    setSelectedIndex(index);

    ref.current.style.transform = "translateX(-" + index * size + "px" + ")";
    setSelectedDate(
      ref.current.children[index].children[0].children[2].innerText
    );

    setMovingState(index);
    setMove(index * size);
  };

  const MovingCarousel = () => {
    let MoveVar = move;
    let movingStateVar = movingState + 1;
    MoveVar + 1;
    MoveVar = size * movingStateVar;
    ref.current.style.transform = "translateX(-" + MoveVar + "px" + ")";
    setMovingState(movingStateVar);
    setMove(MoveVar);
  };
  const MovingCarouselBackwards = () => {
    if (move !== 1 && movingState !== 0) {
      let MoveVar = move;
      let movingStateVar = movingState - 1;
      MoveVar - 1;
      MoveVar = size * movingStateVar;
      setMovingState(movingStateVar);
      setMove(MoveVar);
      ref.current
        ? (ref.current.style.transform = "translateX(-" + MoveVar + "px" + ")")
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
          <div
            className={`absolute -right-[18px] bg-white w-[3%]  mt-2 bg-opacity-50 h-[72px] `}
          >
            <button
              onClick={(e) => MovingCarousel()}
              className={`absolute top-6`}
            >
              <ChevronRight className="w-4" />
            </button>
          </div>
          <div className="absolute w-full flex space-x-6 overflow-hidden ">
            <ul className={`list-none flex w-full `} ref={ref}>
              {data.map((x, index) => (
                <li
                  key={Math.random()}
                  className={`mt-2 !bg-${
                    selectedIndex === index ? "yellow-300" : "black"
                  } mr-4 shadow-sm`}
                  style={{ left: size * index + "px" }}
                  onClick={() => setingMovingCarousel(index)}
                >
                  <div className="flex flex-col items-center justify-center w-[100px]">
                    <div>{x.monthName}</div>
                    <div>{x.message}</div>
                    <div>{x.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white -left-[18px]  w-[3%]  top-2 bg-opacity-50 h-[72px]  relative">
            <button
              className={`absolute top-6`}
              onClick={(e) => MovingCarouselBackwards()}
            >
              <ChevronLeft className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseCarousel;
