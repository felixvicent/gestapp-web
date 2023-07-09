import { Graphic } from "@/components/Graphic";

import { Template } from "@/templates";
import { Typography } from "antd";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

export default function Home() {
  return (
    <Template.Default>
      <div>
        <Typography>Despesas</Typography>

        <Graphic.Expense />
      </div>

      <div className="mt-16">
        <Typography>Receitas</Typography>

        <Graphic.Income />
      </div>
    </Template.Default>
  );
}
