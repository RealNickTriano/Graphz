"use client";
import BarGraph from "@/components/BarGraph";
import BarOptions from "@/components/BarOptions";
import ColorPicker from "@/components/ColorPicker";
import { useState } from "react";

export default function Home() {
  const [barColor, setBarColor] = useState("#3b82f6");
  const [barWidth, setBarWidth] = useState("4");
  const [barGap, setBarGap] = useState("3");
  const [barPlacement, setBarPlacement] = useState("center");
  const [bgMain, setBgMain] = useState("#334155");
  const [bgForeground, setBgForeground] = useState("#334155");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-24">
      <h1 className="text-8xl text-transparent font-bold from-slate-950 to-slate-400 bg-gradient-to-r bg-clip-text py-2">
        graphz.
      </h1>
      <div className="flex justify-center gap-12 items-center w-[50%]">
        {/* yInterval needs to match maxY i.e maxY % yInterval === 0 */}
        <BarGraph
          title={"Sales Pipeline Overview"}
          description={"Insights into this month's sales"}
          barColor={barColor}
          barWidth={barWidth}
          barGap={barGap}
          barPlacement={barPlacement}
          bgMain={bgMain}
          bgForeground={bgForeground}
          subTitle={"Deals by month"}
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
        />
        <BarOptions
          barColor={barColor}
          barWidth={barWidth}
          barGap={barGap}
          barPlacement={barPlacement}
          bgMain={bgMain}
          bgForeground={bgForeground}
          setBarColor={setBarColor}
          setBarWidth={setBarWidth}
          setBarGap={setBarGap}
          setBarPlacement={setBarPlacement}
          setBgMain={setBgMain}
          setBgForeground={setBgForeground}
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
