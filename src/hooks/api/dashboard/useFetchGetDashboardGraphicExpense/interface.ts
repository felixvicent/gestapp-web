import { CategoryType, GraphicDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { QueryKey, UseQueryOptions } from "react-query";

export interface IUseFetchGetDashboardGraphicExpense {
  dependencyArray?: any[];
  options?: UseQueryOptions<
    GraphicDTO[],
    IApiErrorResponse,
    GraphicDTO[],
    QueryKey
  >;
  payload?: {
    type: CategoryType;
  };
}
