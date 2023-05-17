import BarGraph from "@/components/BarGraph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* yInterval needs to match maxY i.e maxY % yInterval === 0 */}
      <BarGraph
        title={"Sales Pipeline Overview"}
        description={"Insights into this month's sales"}
        subTitle={"Deals by month"}
        maxY={50}
        yInterval={10}
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
    </main>
  );
}

type Bar = {
  label: string;
  value: number;
};

type BarGraph = {
  title: string;
  description: string;
  subTitle: string;
  maxY: number;
  xValues: Bar[];
};
