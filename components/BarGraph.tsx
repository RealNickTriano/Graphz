"use client";

import { useEffect, useRef, useState } from "react";

const BarGraph = ({
  title,
  description,
  subTitle,
  maxY,
  yInterval,
  xValues,
}: BarGraph) => {
  const graph = useRef();
  const [graphHeight, setGraphHeight] = useState(0);

  const heightOfYLabel = 20;
  const maxYValue = 8;
  const negativeHeightOfXLabel = -28;
  const thicknessOfLines = 1;

  const barValues = [
    {
      name: "January",
      value: 4,
    },
    {
      name: "Feburary",
      value: 0,
    },
    {
      name: "March",
      value: 5,
    },
    {
      name: "April",
      value: 2,
    },
  ];

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
    <div className="bg-slate-700 rounded-xl px-8 py-6 flex flex-col gap-6 min-w-[50%] shadow-md transition-all">
      <div className="flex flex-col">
        <h1 className="text-white font-semibold">{title}</h1>
        <h2 className="text-gray-500">{description}</h2>
      </div>
      <div className="border-[1px] border-gray-500 rounded-lg p-2 shadow-md flex flex-col gap-6 pb-12 px-4">
        <h2 className="text-white">{subTitle}</h2>
        {/* Graph */}
        <div
          ref={graph}
          className="text-gray-500 flex flex-col gap-12 text-sm relative"
        >
          {createIntervals().map((item) => {
            return (
              <div>
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
            className="absolute flex justify-around items-end w-full"
          >
            {barValues.map((item) => {
              return (
                <div className="flex flex-col gap-2 text-gray-300 text-center">
                  <div
                    style={{
                      height:
                        item.value === 0
                          ? thicknessOfLines
                          : ((graphHeight - heightOfYLabel) / maxY) *
                            item.value,
                    }}
                    className="bg-blue-500 rounded-sm w-16"
                  ></div>
                  <h1 className="">{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
