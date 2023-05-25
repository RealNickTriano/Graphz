// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const LineGraph = ({
//   title,
//   description,
//   subTitle,
//   barColor,
//   maxY,
//   yInterval,
//   xValues = [],
// }: BarGraph) => {
//   const graph = useRef<HTMLDivElement>();
//   const [graphHeight, setGraphHeight] = useState(0);

//   const heightOfYLabel = 20;
//   const negativeHeightOfXLabel = -28;
//   const thicknessOfLines = 0;
//   const widthOfBar = 64;

//   const createIntervals = () => {
//     var intervals = [];
//     for (var i = 0; i <= maxY; i += yInterval) {
//       intervals.push(i);
//     }

//     return intervals.reverse();
//   };

//   const canvas = useRef<HTMLCanvasElement>();
//   let ctx = null;

//   useEffect(() => {
//     setGraphHeight(graph.current.offsetHeight);
//   }, [graph, yInterval, maxY]);

//   useEffect(() => {
//     const canvasEle = canvas.current;
//     canvasEle.width = canvasEle.clientWidth;
//     canvasEle.height = canvasEle.clientHeight;

//     // get context of the canvas
//     ctx = canvasEle.getContext("2d");

//     xValues.forEach((item, index) => {
//       drawLine({
//         x: 50 * (index + 1),
//         y: 196 - (((graphHeight - heightOfYLabel) / maxY) * item.data - 4),
//         x1: 50 * (index + 2),
//         y1:
//           index !== xValues.length - 1
//             ? 196 -
//               (((graphHeight - heightOfYLabel) / maxY) *
//                 xValues[index + 1].data -
//                 4)
//             : 196 - (((graphHeight - heightOfYLabel) / maxY) * item.data - 4),
//       });
//     });
//   }, []);

//   // draw a line
//   const drawLine = (info) => {
//     const { x, y, x1, y1 } = info;
//     const color = "#3b82f6";
//     const width = 4;

//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x1, y1);
//     ctx.strokeStyle = color;
//     ctx.lineWidth = width;
//     ctx.stroke();
//   };

//   return (
//     <div
//       style={{ width: (widthOfBar + 40) * xValues.length }}
//       className="bg-slate-700 rounded-xl px-8 py-6 flex flex-col gap-6 min-w-[50%] shadow-md transition-all"
//     >
//       <div className="flex flex-col">
//         <h1 className="text-white font-semibold">{title}</h1>
//         <h2 className="text-gray-500">{description}</h2>
//       </div>
//       <div className="border-[1px] border-gray-500 rounded-lg p-2 shadow-md flex flex-col gap-6 pb-12 px-4">
//         <h2 className="text-white">{subTitle}</h2>
//         {/* Graph */}
//         <div
//           ref={graph}
//           className="text-gray-500 flex flex-col gap-6 text-sm relative"
//         >
//           {createIntervals().map((item) => {
//             return (
//               <div>
//                 <div>{item}</div>
//                 <div
//                   style={{ height: thicknessOfLines }}
//                   className="w-full bg-gray-500"
//                 ></div>
//               </div>
//             );
//           })}

//           {/* Bars */}
//           <div
//             style={{ bottom: negativeHeightOfXLabel }}
//             className="absolute flex justify-around items-end w-full px-2"
//           >
//             {xValues.map((item) => {
//               return (
//                 <div className="flex flex-col gap-2 text-gray-300 text-center place-items-center">
//                   <div
//                     style={{
//                       marginBottom:
//                         item.data === 0
//                           ? thicknessOfLines
//                           : ((graphHeight - heightOfYLabel) / maxY) *
//                               item.data -
//                             4,
//                     }}
//                     className="bg-blue-500 rounded-full w-2 h-2"
//                   ></div>
//                   <h1 className="">{item.label}</h1>
//                 </div>
//               );
//             })}
//           </div>
//           <canvas ref={canvas} className="w-full h-full absolute"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LineGraph;
