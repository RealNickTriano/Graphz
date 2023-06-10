import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { BiLineChart, BiScatterChart } from "react-icons/bi";

const GraphTypeSelector = () => {
  const graphTypes = [
    {
      name: "Bar",
      icon: <BsBarChartFill />,
      enabled: true,
    },
    {
      name: "Line",
      icon: <BiLineChart />,
      enabled: false,
    },
    {
      name: "Scatter",
      icon: <BiScatterChart />,
      enabled: false,
    },
  ];
  return (
    <div className="grid grid-rows-auto grid-cols-3 gap-4">
      {graphTypes.map((item, index) => {
        return (
          <button
            style={{ opacity: item.enabled ? 1 : 0.5 }}
            className="flex justify-between w-full items-center gap-2 px-4 py-1 rounded-full bg-black text-white"
          >
            {item.name}
            {item.icon}
          </button>
        );
      })}
    </div>
  );
};

export default GraphTypeSelector;
