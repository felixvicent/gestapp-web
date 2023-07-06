import { CategoryDTO } from "@/api/types/CategoryDTO";
import { IApiErrorResponse } from "@/services/api/interface";
import { QueryKey, UseQueryOptions } from "react-query";

export interface IUseFetchGetAllCategories {
  dependencyArray?: any[];
  options?: UseQueryOptions<
    CategoryDTO[],
    IApiErrorResponse,
    CategoryDTO[],
    QueryKey
  >;
}
