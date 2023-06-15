import React, { useState } from "react";

import GraphDropdown from "@/components/GraphDropdown";
import ColorDropDown from "@/components/ColorDropDown";
import GraphTypeSelector from "@/components/GraphTypeSelector";
import Slider from "@mui/material/Slider";
import { Switch } from "@mui/material";
import { BsBarChartFill, BsBarChartLineFill } from "react-icons/bs";
import { BiLineChart, BiScatterChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";

const Toolbar = ({
  bgMain,
  setBgMain,
  bgForeground,
  setBgForeground,
  barColor,
  setBarColor,
  linesColor,
  setLinesColor,
  setBarWidth,
  setBarGap,
  setTextColor,
  setGraphType,
  graphType,
}) => {
  const [showGraphTypes, setShowGraphTypes] = useState(false);
  const [currentGraphType, setCurrentGraphType] = useState("Bar");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-1 mb-6">
        <GraphDropdown setGraphType={setGraphType} graphType={graphType} />
        <ColorDropDown
          title={"Background"}
          currentColor={bgMain}
          setCurrentColor={setBgMain}
        />
        <ColorDropDown
          title={"Foreground"}
          currentColor={bgForeground}
          setCurrentColor={setBgForeground}
        />
        <ColorDropDown
          title={"Bar Color"}
          currentColor={barColor}
          setCurrentColor={setBarColor}
        />
        <ColorDropDown
          title={"Line Color"}
          currentColor={linesColor}
          setCurrentColor={setLinesColor}
        />
      </div>
      <div className="flex justify-center items-center w-full gap-6">
        <div className="flex justify-between px-6 items-center bg-black rounded-full gap-4">
          <label htmlFor="width" className="text-white font-bold">
            Bar Width
          </label>
          <Slider
            aria-label="Width"
            defaultValue={4}
            onChange={(e) => setBarWidth(e.target.value)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            sx={{ color: "white", width: "10rem" }}
          />
        </div>

        <div className="flex justify-between items-center bg-black rounded-full px-6 gap-4">
          <label htmlFor="gap" className="text-white font-bold">
            Bar Gap
          </label>
          <Slider
            aria-label="Gap"
            defaultValue={4}
            onChange={(e) => setBarGap(e.target.value)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            sx={{ color: "white", width: "10rem" }}
          />
        </div>
        <div className="rounded-full text-black font-bold">
          <label htmlFor="">Dark Text</label>
          <Switch
            color="default"
            onChange={(e) => setTextColor(e.target.checked)}
          />
        </div>
      </div>

      {showGraphTypes && <GraphTypeSelector />}
    </div>
  );
};

export default Toolbar;
