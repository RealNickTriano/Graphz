import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBarChartFill, BsBarChartLineFill } from "react-icons/bs";
import { BiLineChart, BiScatterChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";

const GraphDropdown = ({ setGraphType, graphType }) => {
  const [showDrop, setShowDrop] = useState(false);

  const graphTypes = [
    {
      name: "Bar",
      icon: <BsBarChartFill />,
    },
    {
      name: "Line",
      icon: <BiLineChart />,
    },
    {
      name: "Scatter",
      icon: <BiScatterChart />,
    },
    {
      name: "Pie",
      icon: <FaChartPie />,
    },
    {
      name: "Combo",
      icon: <FcComboChart />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-1 relative">
      <div
        id="type"
        className="flex justify-between items-center gap-2 hover:cursor-pointer bg-black font-semibold px-4 py-1 rounded-full text-white w-40"
        onClick={() => setShowDrop(!showDrop)}
      >
        {graphType.name}
        {graphType.icon}
      </div>

      {showDrop && (
        <ul className="top-9 absolute font-semibold flex-col flex justify-start items-center w-full bg-black z-10 text-white rounded-lg h-32 overflow-y-scroll scrollbar">
          {graphTypes.map((item, index) => {
            return (
              <li className="w-full">
                <button
                  key={index}
                  className="flex justify-between items-center w-full py-1 px-4 hover:bg-gray-900"
                  onClick={() => {
                    setGraphType(item);
                    setShowDrop(!showDrop);
                  }}
                >
                  {item.name} {item.icon}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GraphDropdown;
