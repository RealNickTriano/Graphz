"use client";

import { useEffect, useRef, useState } from "react";
import Bar from "@/components/Bar";

const BarGraph = ({
  title,
  description,
  subTitle,
  barColor,
  maxY,
  yInterval,
  xValues,
}: BarGraph) => {
  const graph = useRef();
  const [graphHeight, setGraphHeight] = useState(0);

  const heightOfYLabel = 20;
  const negativeHeightOfXLabel = -28;
  const thicknessOfLines = 1;
  const widthOfBar = 64;

  const createIntervals = () => {
    var intervals = [];
    for (var i = 0; i <= maxY; i += yInterval) {
      intervals.push(i);
    }

    return intervals.reverse();
  };

  useEffect(() => {
    setGraphHeight(graph.current.offsetHeight);
  }, [graph, yInterval, maxY]);

  return (
    <div
      style={{ width: (widthOfBar + 40) * xValues.length }}
      className="bg-slate-700 rounded-xl px-8 py-6 flex flex-col gap-6 min-w-[100%] shadow-md transition-all"
    >
      <div className="flex flex-col">
        <h1 className="text-white font-semibold">{title}</h1>
        <h2 className="text-gray-500">{description}</h2>
      </div>
      <div className="border-[1px] border-gray-500 rounded-lg p-2 shadow-md flex flex-col gap-6 pb-12 px-4">
        <h2 className="text-white">{subTitle}</h2>
        {/* Graph */}
        <div
          ref={graph}
          className="text-gray-500 flex flex-col gap-6 text-sm relative"
        >
          {createIntervals().map((item, index) => {
            return (
              <div key={index}>
                <div>{item}</div>
                <div
                  style={{ height: thicknessOfLines }}
                  className="w-full bg-gray-500"
                ></div>
              </div>
            );
          })}

          {/* Bars */}
          <div
            style={{ bottom: negativeHeightOfXLabel }}
            className="absolute flex justify-center gap-12 items-end w-full px-2"
          >
            {xValues.map((item, index) => {
              return (
                <Bar
                  key={index}
                  value={item.value}
                  label={item.label}
                  maxY={maxY}
                  barColor={barColor}
                  heightOfYLabel={heightOfYLabel}
                  graphHeight={graphHeight}
                  thicknessOfLines={thicknessOfLines}
                ></Bar>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
