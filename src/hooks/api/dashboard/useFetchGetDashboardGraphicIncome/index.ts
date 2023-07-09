import { QueryKey, useQuery } from "react-query";
import { IApiErrorResponse } from "@/services/api/interface";
import { IUseFetchGetDashboardGraphicIncome } from "./interface";
import { CategoryType, GraphicDTO } from "@/api/types";
import { fetchGetDashboardGraphic } from "@/api/requests/dashboard/graphic/{type}/get";

export const useFetchGetDashboardGraphicIncomeKey =
  "api/requests/dashboard/graphic/{type}/get_income";

export function useFetchGetDashboardGraphicIncome({
  dependencyArray = [],
  options,
  payload = {
    type: CategoryType.INCOME,
  },
}: IUseFetchGetDashboardGraphicIncome) {
  return useQuery<GraphicDTO[], IApiErrorResponse, GraphicDTO[], QueryKey>(
    [useFetchGetDashboardGraphicIncomeKey, dependencyArray],
    async () => {
      return await fetchGetDashboardGraphic({
        path: payload,
      });
    },
    options
  );
}
