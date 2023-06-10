import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBarChartFill } from "react-icons/bs";
import { BiLineChart, BiScatterChart } from "react-icons/bi";

const Dropdown = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-1 relative">
      <div
        id="type"
        className="flex justify-center items-center gap-2 hover:cursor-pointer bg-black font-semibold px-4 py-1 rounded-full text-white"
        onClick={() => {
          if (!showDrop) setShowDrop(true);
        }}
      >
        Graph Type
        <BsBarChartFill />
      </div>

      {showDrop && (
        <ul
          onMouseLeave={() => setShowDrop(false)}
          className="top-9 absolute font-semibold  flex-col flex justify-center items-center w-full rounded-full text-white gap-1"
        >
          <li className="flex justify-between w-full items-center gap-2 px-4 py-1 hover:bg-gray-950 hover:cursor-pointer rounded-full bg-black">
            Bar
            <BsBarChartFill />
          </li>
          <li className="flex justify-between w-full items-center gap-2 px-4 py-1 hover:bg-gray-950 hover:cursor-pointer rounded-full bg-black">
            Line
            <BiLineChart size={20} />
          </li>
          <li className="flex justify-between w-full items-center gap-2 px-4 py-1 hover:bg-gray-950 hover:cursor-pointer rounded-full bg-black">
            Scatter
            <BiScatterChart size={20} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
