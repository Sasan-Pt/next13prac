import React from "react";
import BaseMultipSelect from "./BasemultipSelect";

export const MultipSelect = () => {
  const mockdata = [
    { label: "ds", value: "bye" },
    { label: "hj", value: "why" },
    { label: "46", value: "damn" },
    { label: ";k", value: "it" },
    { label: "ds", value: "bye" },
    { label: "hj", value: "why" },
    { label: "46", value: "damn" },
    { label: ";k", value: "it" },
    { label: "ds", value: "bye" },
    { label: "hj", value: "why" },
    { label: "46", value: "damn" },
    { label: ";k", value: "it" },
    { label: "ds", value: "bye" },
    { label: "hj", value: "why" },
    { label: "46", value: "damn" },
    { label: ";k", value: "it" },
  ];
  return (
    <div className="flex gap-x-4">
      <div className="w-1/2 space-y-4">
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
      </div>
      <div className="w-1/2 space-y-4">
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
        <BaseMultipSelect
          data={mockdata}
          defaultValue="i dont know"
          onSelect={() => console.log("hi")}
          value={[]}
          multipSelect
          className="!w-full"
        />
      </div>
    </div>
  );
};
