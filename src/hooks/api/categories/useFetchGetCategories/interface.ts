import { CategoryDTO } from "@/api/types/CategoryDTO";
import { Page } from "@/api/types/Page";
import { IApiErrorResponse } from "@/services/api/interface";
import { QueryKey, UseQueryOptions } from "react-query";

export interface IUseFetchGetCategories {
  dependencyArray?: any[];
  options?: UseQueryOptions<
    Page<CategoryDTO>,
    IApiErrorResponse,
    Page<CategoryDTO>,
    QueryKey
  >;
  payload?: {
    page: number;
  };
}
