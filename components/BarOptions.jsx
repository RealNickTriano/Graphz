import React from "react";
import ColorPicker from "@/components/ColorPicker";

const BarOptions = ({
  barColor,
  barWidth,
  barGap,
  barPlacement,
  setBarColor,
  setBarWidth,
  setBarGap,
  setBarPlacement,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <h1 className="text-center w-full">Bar Options</h1>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="color">Color</label>
        <ColorPicker
          selectedColor={barColor}
          setSelectedColor={setBarColor}
        ></ColorPicker>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="width">Width</label>
        <input
          type="text"
          name="width"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1"
          value={barWidth}
          onChange={(e) => setBarWidth(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="gap">Bar Gap</label>
        <input
          type="text"
          name="gap"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1"
          value={barGap}
          onChange={(e) => setBarGap(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="placement">Placement</label>
        <input
          type="text"
          name="placement"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1 capitalize"
          value={barPlacement}
          onChange={(e) => setBarPlacement(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BarOptions;
