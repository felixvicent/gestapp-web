import { QueryKey, useQuery } from "react-query";
import { IApiErrorResponse } from "@/services/api/interface";
import { IUseFetchGetDashboardGraphicExpense } from "./interface";
import { CategoryType, GraphicDTO } from "@/api/types";
import { fetchGetDashboardGraphic } from "@/api/requests/dashboard/graphic/{type}/get";

export const useFetchGetDashboardGraphicExpenseKey =
  "api/requests/dashboard/graphic/{type}/get_expense";

export function useFetchGetDashboardGraphicExpense({
  dependencyArray = [],
  options,
  payload = {
    type: CategoryType.EXPENSE,
  },
}: IUseFetchGetDashboardGraphicExpense) {
  return useQuery<GraphicDTO[], IApiErrorResponse, GraphicDTO[], QueryKey>(
    [useFetchGetDashboardGraphicExpenseKey, dependencyArray],
    async () => {
      return await fetchGetDashboardGraphic({
        path: payload,
      });
    },
    options
  );
}
