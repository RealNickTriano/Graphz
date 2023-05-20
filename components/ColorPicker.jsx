import React, { useState } from "react";

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
  const colors = {
    slate: [
      "#f8fafc",
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
      "#020617",
    ],
    gray: [
      "#f9fafb",
      "#f3f4f6",
      "#e5e7eb",
      "#d1d5db",
      "#9ca3af",
      "#6b7280",
      "#4b5563",
      "#374151",
      "#1f2937",
      "#111827",
      "#030712",
    ],
    zinc: [
      "#fafafa",
      "#f4f4f5",
      "#e4e4e7",
      "#d4d4d8",
      "#a1a1aa",
      "#71717a",
      "#52525b",
      "#3f3f46",
      "#27272a",
      "#18181b",
      "#09090b",
    ],
    neutral: [
      "#fafafa",
      "#f5f5f5",
      "#e5e5e5",
      "#d4d4d4",
      "#a3a3a3",
      "#737373",
      "#525252",
      "#404040",
      "#262626",
      "#171717",
      "#0a0a0a",
    ],
    stone: [
      "#fafaf9",
      "#f5f5f4",
      "#e7e5e4",
      "#d6d3d1",
      "#a8a29e",
      "#78716c",
      "#57534e",
      "#44403c",
      "#292524",
      "#1c1917",
      "#0c0a09",
    ],
  };

  const [showExtra, setShowExtra] = useState("none");
  // const [selectedColor, setSelectedColor] = useState("#64748b");

  const handleClick = (e, name) => {
    // console.log(name);
    // console.log(showExtra);
    if (showExtra === name) {
      setShowExtra("none");
    } else {
      setShowExtra(name);
    }
  };

  return (
    // <div className="flex flex-col justify-center items-center gap-4">
    //   <div
    //     className="w-12 h-24 shadow-md"
    //     style={{ backgroundColor: selectedColor }}
    //   ></div>
    <div className="flex justify-center items-center gap-2 relative">
      {Object.entries(colors).map(([name, shades], index) => {
        return (
          <div key={index}>
            <button
              onClick={(e) => handleClick(e, name)}
              className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-md"
              style={{
                backgroundColor: shades[5],
                borderColor: showExtra === name && "black",
              }}
            ></button>
            {showExtra === name && (
              <div className="flex justify-center items-center gap-2 bg-white shadow-md px-2 py-1 rounded-md absolute left-0">
                {shades.map((item, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={(e) => setSelectedColor(item)}
                      className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-md hover:border-black"
                      style={{
                        backgroundColor: item,
                        borderColor: selectedColor === item && "black",
                      }}
                    ></button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default ColorPicker;
