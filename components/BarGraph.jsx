"use client";

import { useEffect, useRef, useState } from "react";
import Bar from "@/components/Bar";

const BarGraph = ({
  title,
  description,
  subTitle,
  barColor,
  barWidth,
  barGap,
  barPlacement,
  linesColor,
  textColor,
  bgMain,
  bgForeground,
  maxY,
  yInterval,
  minY,
  setMaxY,
  setMinY,
  setYInterval,
  xValues,
}) => {
  const graph = useRef();
  const barHolder = useRef();
  const [graphHeight, setGraphHeight] = useState(0);
  const [graphWidth, setGraphWidth] = useState(0);

  const heightOfYLabel = 20;
  const negativeHeightOfXLabel = -28;
  const thicknessOfLines = 1;
  const widthOfBar = 64;

  const createIntervals = () => {
    var intervals = [];
    for (var i = minY; i <= maxY; i += yInterval) {
      intervals.push(i);
    }

    return intervals.reverse();
  };

  useEffect(() => {
    const graphEle = graph.current;
    if (!graphEle) {
      setGraphHeight(350);
    } else {
      setGraphHeight(graphEle.offsetHeight);
    }
  }, [graph, yInterval, maxY]);

  useEffect(() => {
    const barHolderEle = barHolder.current;
    if (!barHolderEle) {
      setGraphWidth(450);
    } else {
      setGraphWidth(barHolderEle.offsetWidth);
    }
  }, [barWidth, barGap, xValues]);

  const convertRemToPixels = (rem) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div
      style={{
        // // Convert rem to px and compute width of graph
        // width:
        //   (convertRemToPixels(Number(barWidth)) +
        //     convertRemToPixels(Number(barGap))) *
        //   xValues.length,
        backgroundColor: bgMain,
      }}
      className="rounded-xl px-8 py-6 flex flex-col gap-6 shadow-md transition-all justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          style={{ color: !textColor ? "white" : "black" }}
          className="font-semibold"
        >
          {title}
        </h1>
        <h2 style={{ color: !textColor ? "#6b7280" : "#374151" }} className="">
          {description}
        </h2>
      </div>
      <div
        style={{
          // Convert rem to px and compute width of graph
          width: graphWidth + 24,
          // (convertRemToPixels(Number(barWidth)) +
          //   convertRemToPixels(Number(barGap))) *
          //   xValues.length +
          // 64,
          backgroundColor: bgForeground,
          borderColor: linesColor,
        }}
        className="border-[1px] border-gray-500 rounded-lg p-2 shadow-md flex flex-col gap-6 pb-12 px-4"
      >
        <h2 style={{ color: !textColor ? "white" : "black" }} className="">
          {subTitle}
        </h2>
        {/* Graph */}
        <div
          ref={graph}
          style={{ color: linesColor }}
          className="flex flex-col gap-6 text-sm relative"
        >
          {createIntervals().map((item, index) => {
            return (
              <div key={index}>
                <div>{item}</div>
                <div
                  style={{
                    height: thicknessOfLines,
                    backgroundColor: linesColor,
                  }}
                  className="w-full"
                ></div>
              </div>
            );
          })}

          {/* Bars */}
          <div
            ref={barHolder}
            style={{
              bottom: negativeHeightOfXLabel,
              gap: barGap + "rem",
              justifyContent: barPlacement,
            }}
            className="absolute flex items-end px-4"
          >
            {xValues.map((item, index) => {
              return (
                <Bar
                  key={index}
                  value={item.data}
                  label={item.label}
                  maxY={maxY}
                  barColor={barColor}
                  textColor={textColor}
                  barWidth={barWidth}
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
