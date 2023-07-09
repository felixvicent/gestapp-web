import { CategoryType } from "@/api/types";
import {  useFetchGetDashboardGraphicIncome } from "@/hooks/api";
import { useSession } from "@/hooks/useSession";
import { Line } from "react-chartjs-2";

const colors = [
  "rgba(255, 99 , 132, 1)",
  "rgba(54 , 162, 235, 1)",
  "rgba(255, 206, 86 , 1)",
  "rgba(75 , 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64 , 1)",
  "rgba(250, 126, 0  , 1)",
  "rgba(250, 27 , 0  , 1)",
  "rgba(250, 0  , 232, 1)",
  "rgba(30,  1  , 250, 1)",
  "rgba(173, 72 , 0  , 1)",
  "rgba(34 , 179, 57 , 1)",
];

export function IncomeGraphic() {
  const { token } = useSession();

  const { data: incomes } = useFetchGetDashboardGraphicIncome({
    payload: {
      type: CategoryType.INCOME,
    },
    options: {
      enabled: !!token,
    },
  });

  const incomesData = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets:
      incomes?.map((incomes, index) => ({
        label: incomes.category,
        data: incomes.values.map((value) => value.value),
        borderColor: colors[index],
        tension: 0.5,
        fill: false,
      })) ?? [],
  };

  return <Line data={incomesData} />;
}
