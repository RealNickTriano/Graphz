type BarType = {
  label: string;
  value: number;
};

type BarGraph = {
  title: string;
  description: string;
  subTitle: string;
  barColor: string;
  barWidth: string;
  barGap: string;
  barPlacement: string;
  bgMain: string;
  bgForeground: string;
  maxY: number;
  yInterval: number;
  xValues: BarType[];
};
