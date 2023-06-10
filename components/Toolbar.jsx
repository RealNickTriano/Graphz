import React, { useState } from "react";

import DropDown from "@/components/DropDown";
import ColorDropDown from "@/components/ColorDropDown";
import GraphTypeSelector from "@/components/GraphTypeSelector";
import { BsBarChartFill } from "react-icons/bs";
import { BiLineChart, BiScatterChart } from "react-icons/bi";

const Toolbar = ({ bgMain, setBgMain }) => {
  const [showGraphTypes, setShowGraphTypes] = useState(false);
  const [currentGraphType, setCurrentGraphType] = useState("Bar");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-1 mb-6">
        <button
          id="type"
          className="flex justify-center items-center gap-2 hover:cursor-pointer bg-black font-semibold px-4 py-1 rounded-full text-white"
          onClick={() => setShowGraphTypes(!showGraphTypes)}
        >
          Graph Type
          <BsBarChartFill />
        </button>
        <ColorDropDown currentColor={bgMain} setCurrentColor={setBgMain} />
      </div>
      {showGraphTypes && <GraphTypeSelector />}
    </div>
  );
};

export default Toolbar;
