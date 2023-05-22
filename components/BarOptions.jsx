import React from "react";
import ColorPicker from "@/components/ColorPicker";
import Slider from "@mui/material/Slider";
import { Switch } from "@mui/material";

const BarOptions = ({
  barColor,
  barWidth,
  barGap,
  barPlacement,
  bgMain,
  bgForeground,
  linesColor,
  textColor,
  title,
  setTitle,
  description,
  subTitle,
  setDescription,
  setSubTitle,
  setBarColor,
  setBarWidth,
  setBarGap,
  setBarPlacement,
  setBgMain,
  setBgForeground,
  setLinesColor,
  setTextColor,
}) => {
  return (
    <div className="grid grid-cols-4 justify-center items-start gap-6">
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
        <Slider
          aria-label="Width"
          defaultValue={4}
          onChange={(e) => setBarWidth(e.target.value)}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={5}
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="gap">Bar Gap</label>
        <Slider
          aria-label="Gap"
          defaultValue={4}
          onChange={(e) => setBarGap(e.target.value)}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
        />
      </div>

      {/* <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="placement">Placement</label>
        <input
          type="text"
          name="placement"
          className="w-32 outline-none rounded-lg shadow-md px-2 py-1 capitalize"
          value={barPlacement}
          onChange={(e) => setBarPlacement(e.target.value)}
        />
      </div> */}
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-64 outline-none rounded-lg shadow-md px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="w-64 outline-none rounded-lg shadow-md px-2 py-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="subTitle">Sub Title</label>
          <input
            type="text"
            name="subTitle"
            id="subTitle"
            className="w-64 outline-none rounded-lg shadow-md px-2 py-1"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Dark Text</label>
          <Switch onChange={(e) => setTextColor(e.target.checked)} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="color">Background</label>
        <ColorPicker
          selectedColor={bgMain}
          setSelectedColor={setBgMain}
        ></ColorPicker>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="color">Foreground</label>
        <ColorPicker
          selectedColor={bgForeground}
          setSelectedColor={setBgForeground}
        ></ColorPicker>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <label htmlFor="color">Lines / Border</label>
        <ColorPicker
          selectedColor={linesColor}
          setSelectedColor={setLinesColor}
        ></ColorPicker>
      </div>
    </div>
  );
};

export default BarOptions;
