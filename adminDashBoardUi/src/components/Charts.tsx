import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export function BarChart({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    indexAxis: horizontal ? "y" : "x",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: title_1 ?? "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title_1 ?? "Dataset 1",
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: "Dataset 2",
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}