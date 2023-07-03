import { fetchGetCategories } from "@/api/requests/categories/get";
import { QueryKey, useQuery } from "react-query";
import { Page } from "@/api/types/Page";
import { CategoryDTO } from "@/api/types/CategoryDTO";
import { IApiErrorResponse } from "@/services/api/interface";
import { IUseFetchGetCategories } from "./interface";

export const useFetchGetCategoriesKey = "api/requests/categories/get";

export function useFetchGetCategories({
  dependencyArray = [],
  options,
  payload = {
    page: 0,
  },
}: IUseFetchGetCategories) {
  return useQuery<
    Page<CategoryDTO>,
    IApiErrorResponse,
    Page<CategoryDTO>,
    QueryKey
  >(
    [useFetchGetCategoriesKey, dependencyArray],
    async () => {
      return await fetchGetCategories({
        query: payload,
      });
    },
    options
  );
}
