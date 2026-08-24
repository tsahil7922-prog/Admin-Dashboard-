import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },

    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,

  datasets: [
    {
      label: "Dataset",
      data: [12, 19, 8, 15, 10, 20, 14],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export function BarChart() {
  return <Bar data={data} />;
}
