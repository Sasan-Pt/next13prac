import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import cx from "classnames";
import { forEach, includes, isEqual, some } from "lodash";
import React, { useEffect, useRef, useState } from "react";

type BaseMultiSelectType = {
  data: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
  onSelect: (value: any) => void;
  value: {
    label: string;
    value: string;
  }[];
  className?: string;
  optionClassName?: string;
};

const BaseMultipSelect = (props: BaseMultiSelectType) => {
  const { data, defaultValue, onSelect, value, className, optionClassName } =
    props;
  const [isListOpen, setIsListOpen] = useState(false);
  const [holdState, setHoldState] = useState<any>({});

  const toggleItem = (id?: string, key?: string) => {
    const temp = { ...holdState };

    if (key === "همه موارد" || !key) {
      setHoldState({});
      onSelect([]);
    } else if (Object.keys(holdState).length > 0) {
      if (temp.hasOwnProperty(key)) {
        delete temp[key];
        setHoldState(temp);
        onSelect(temp);
      } else {
        setHoldState({
          ...holdState,
          [key]: id,
        });
        temp[key] = id;
        onSelect(temp);
      }
    } else {
      setHoldState({
        ...holdState,
        [key]: id,
      });
      temp[key] = id;
      onSelect(temp);
    }
  };

  const ToggleList = () => {
    setIsListOpen(!isListOpen);
  };

  useEffect(() => {
    if (value && Object.keys(holdState).length === 0) {
      setHoldState(value);
    }
  }, []);

  const dropdownref = useRef(null);
  const optionref = useRef(null);

  useEffect(() => {
    const onClick = (e: any) => {
      console.log(!isEqual(e.target, dropdownref?.current?.children?.[0]));
      console.log(!isEqual(e.target, optionref.current));
      if (
        !isEqual(e.target, dropdownref?.current?.children?.[0]) &&
        !isEqual(e.target, optionref.current)
      ) {
        console.log(e.target.innerText, "hola2");
        console.log(optionref.current, "hola");
        console.log(
          optionref?.current?.children?.childnodes.forEach((node) => node),
          "hola3"
        );
        setIsListOpen(false);
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [dropdownref]);

  return (
    <div
      className={"relative"}
      onClick={(e) => e.stopPropagation()}
      ref={dropdownref}
    >
      <div
        role={"button"}
        onClick={ToggleList}
        className={cx(
          `flex justify-between border-2 border-[#e5e7eb] p-2 rounded-lg items-center ${className}`
        )}
      >
        <div className={" leading-7 text-xs"}>
          {Object.keys(holdState).length === 0
            ? defaultValue
            : `${Object.keys(holdState).length} مورد انتخاب شده است`}
        </div>
        <div className={"flex"}>
          <div className={"flex"}>
            {Object.keys(holdState).length !== 0 ? (
              <div
                className={"bg-[#fef0ed] text-[#f3787b] leading-7 text-xs p-1"}
                onClick={() => toggleItem()}
              >
                پاک کردن همه
              </div>
            ) : null}
          </div>
          {isListOpen ? (
            <ChevronUpIcon name="angle-up" className={"w-4"} />
          ) : (
            <ChevronDownIcon name="angle-down" className={"w-4"} />
          )}
        </div>
      </div>
      {isListOpen && (
        <div
          className={` absolute bg-white h-40 overflow-y-auto soft-scrollbar z-50 shadow-lg border-azureish-white2 border-1 rounded-md w-full px-1 space-y-1 mt-1 ${optionClassName}`}
          onClick={(e) => e.stopPropagation()}
          ref={optionref}
        >
          {data
            ? data.map((item) => (
                <div
                  role="button"
                  className={cx(
                    "font-semibold leading-7 text-xs",
                    holdState[item.label] ? "bg-[#f6f4ff]" : null
                  )}
                  key={item.value}
                  onClick={() => toggleItem(item.value, item.label)}
                >
                  {item.label}
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default BaseMultipSelect;
