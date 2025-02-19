import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { letter: "E", count: 186 },
  { letter: "S", count: 305 },
  { letter: "A", count: 237 },
  { letter: "O", count: 73 },
  { letter: "M", count: 209 },
];
const chartConfig = {
  count: {
    label: "Count",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

export function LetterDensityChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          right: 16,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="count" type="number" hide />
        <YAxis
          type="category"
          dataKey="letter"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          hide
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent indicator="line" hideLabel hideIndicator />
          }
        />
        <Bar dataKey="count" layout="vertical" radius={6}>
          <LabelList
            dataKey="letter"
            position="insideLeft"
            offset={16}
            fill="var(--color-label)"
          />
          <LabelList
            dataKey="count"
            position="right"
            offset={8}
            fill="var(--foreground)"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
