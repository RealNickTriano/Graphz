type BarType = {
  id: number;
  label: string;
  data: number;
};

type BarGraph = {
  title: string;
  description: string;
  subTitle: string;
  barColor: string;
  barWidth: string;
  barGap: string;
  textColor: boolean;
  barPlacement: string;
  linesColor: string;
  bgMain: string;
  bgForeground: string;
  maxY: number;
  yInterval: number;
  xValues: BarType[];
};
