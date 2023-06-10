import React from "react";

const ColorBar = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="border-2 border-white w-full h-4  rounded-full"
    ></div>
  );
};

export default ColorBar;
