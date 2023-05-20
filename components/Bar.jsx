import React, { useState } from "react";

const Bar = ({
  maxY,
  value,
  label,
  barColor,
  heightOfYLabel,
  graphHeight,
  thicknessOfLines,
}) => {
  const [barStyle, setBarStyle] = useState(`rounded-sm w-16 ${barColor}`);

  return (
    <div
      onClick={() => console.log(label)}
      className="flex flex-col gap-2 text-gray-300 text-center hover:cursor-pointer"
    >
      <div
        style={{
          height:
            value === 0
              ? thicknessOfLines
              : ((graphHeight - heightOfYLabel) / maxY) * value,
          backgroundColor: barColor,
        }}
        className={"rounded-sm w-16"}
      ></div>
      <h1 className="">{label}</h1>
    </div>
  );
};

export default Bar;