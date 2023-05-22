import React, { useState } from "react";

const Bar = ({
  maxY,
  value,
  label,
  barColor,
  textColor,
  barWidth,
  heightOfYLabel,
  graphHeight,
  thicknessOfLines,
}) => {
  const [barStyle, setBarStyle] = useState(`rounded-sm w-16 ${barColor}`);

  return (
    <div
      onClick={() => console.log(label)}
      className="flex flex-col gap-2 text-gray-300 text-center hover:cursor-pointer justify-center items-center"
    >
      <div
        style={{
          height:
            value === 0
              ? thicknessOfLines
              : ((graphHeight - heightOfYLabel) / maxY) * value,
          backgroundColor: barColor,
          width: barWidth + "rem",
        }}
        className={"rounded-sm"}
      ></div>
      <h1 style={{ color: !textColor ? "#6b7280" : "#374151" }} className="">
        {label}
      </h1>
    </div>
  );
};

export default Bar;
