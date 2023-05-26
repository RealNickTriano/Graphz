"use client";
import "@uploadthing/react/styles.css";
import BarGraph from "@/components/BarGraph";
import BarOptions from "@/components/BarOptions";
import ColorPicker from "@/components/ColorPicker";
import FileUpload from "@/components/FileUpload";
import { useState } from "react";
import { table } from "console";

export default function Home() {
  const [barColor, setBarColor] = useState("#3b82f6");
  const [barWidth, setBarWidth] = useState("4");
  const [barGap, setBarGap] = useState("3");
  const [barPlacement, setBarPlacement] = useState("center");
  const [bgMain, setBgMain] = useState("#334155");
  const [bgForeground, setBgForeground] = useState("#334155");
  const [linesColor, setLinesColor] = useState("#6b7280");
  const [textColor, setTextColor] = useState(false);
  const [title, setTitle] = useState("Sales Pipeline Overview");
  const [description, setDescription] = useState(
    "Insights into this month's sales"
  );
  const [subTitle, setSubTitle] = useState("Deals by month");
  const [barData, setBarData] = useState([
    {
      id: 0,
      label: "January",
      data: 4,
    },
    {
      id: 1,
      label: "Feburary",
      data: 0,
    },
    {
      id: 2,
      label: "March",
      data: 5,
    },
    {
      id: 3,
      label: "April",
      data: 2,
    },
  ]);

  const [CSVContent, setCSVContent] = useState({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-8xl text-transparent font-bold from-slate-950 to-slate-500 bg-gradient-to-r bg-clip-text py-2">
        graphz.
      </h1>
      <h2 className="text-2xl font-bold py-2">
        {" "}
        Data Made Simple and Beautiful.
      </h2>

      <div className="flex flex-col justify-center gap-12 items-center">
        {/* yInterval needs to match maxY i.e maxY % yInterval === 0 */}
        <BarGraph
          title={title}
          description={description}
          subTitle={subTitle}
          barColor={barColor}
          barWidth={barWidth}
          barGap={barGap}
          linesColor={linesColor}
          textColor={textColor}
          barPlacement={barPlacement}
          bgMain={bgMain}
          bgForeground={bgForeground}
          maxY={8}
          yInterval={2}
          xValues={barData}
        />
        <FileUpload setContents={setCSVContent} />
        <div className="flex justify-center items-center gap-1">
          {Object.entries(CSVContent).map(([header, values], index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-start gap-1 "
              >
                <h1 className="font-bold bg-white border-black border-2 px-2 w-full">
                  {header}
                </h1>
                {values.map((item, index) => {
                  return (
                    <h2
                      className="bg-white border-black border-2 px-2 w-full"
                      key={index}
                    >
                      {item}
                    </h2>
                  );
                })}
              </div>
            );
          })}
        </div>
        <BarOptions
          barColor={barColor}
          barWidth={barWidth}
          barGap={barGap}
          barData={barData}
          barPlacement={barPlacement}
          bgMain={bgMain}
          bgForeground={bgForeground}
          linesColor={linesColor}
          title={title}
          description={description}
          subTitle={subTitle}
          setTitle={setTitle}
          setDescription={setDescription}
          setSubTitle={setSubTitle}
          setBarColor={setBarColor}
          setBarWidth={setBarWidth}
          setBarGap={setBarGap}
          setBarPlacement={setBarPlacement}
          setBgMain={setBgMain}
          setBgForeground={setBgForeground}
          setLinesColor={setLinesColor}
          setTextColor={setTextColor}
          setBarData={setBarData}
        ></BarOptions>
      </div>
      {/* <LineGraph
        title={"Sales Pipeline Overview"}
        description={"Insights into this month's sales"}
        subTitle={"Deals by month"}
        barColor={"#e11d48"}
        maxY={8}
        yInterval={2}
        xValues={[
          {
            label: "January",
            value: 4,
          },
          {
            label: "Feburary",
            value: 0,
          },
          {
            label: "March",
            value: 5,
          },
          {
            label: "April",
            value: 2,
          },
        ]}
      /> */}
    </main>
  );
}
