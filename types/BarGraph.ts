type BarType = {
  label: string;
  value: number;
};

type BarGraph = {
  title: string;
  description: string;
  subTitle: string;
  barColor: string;
  maxY: number;
  yInterval: number;
  xValues: BarType[];
};
