type Bar = {
  label: string;
  value: number;
};

type BarGraph = {
  title: string;
  description: string;
  subTitle: string;
  maxY: number;
  yInterval: number;
  xValues: Bar[];
};
