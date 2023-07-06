import { QueryKey, useQuery } from "react-query";
import { CategoryDTO } from "@/api/types/CategoryDTO";
import { IApiErrorResponse } from "@/services/api/interface";
import { IUseFetchGetAllCategories } from "./interface";
import { fetchGetAllCategories } from "@/api/requests/categories/all/get";

export const useFetchGetAllCategoriesKey = "api/requests/categories/all/get";

export function useFetchGetAllCategories({
  dependencyArray = [],
  options,
}: IUseFetchGetAllCategories) {
  return useQuery<CategoryDTO[], IApiErrorResponse, CategoryDTO[], QueryKey>(
    [useFetchGetAllCategoriesKey, dependencyArray],
    async () => {
      return await fetchGetAllCategories();
    },
    options
  );
}
