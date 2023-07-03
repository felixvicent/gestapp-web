import { useMutation } from "react-query";
import { IUseFetchDeleteCategory } from "./interface";
import { queryClient } from "@/services/queryClient";
import { useFetchGetCategoriesKey } from "../useFetchGetCategories";
import { message } from "antd";
import { fetchDeleteCategory } from "@/api/requests/categories/{id}/delete";

export const useFetchDeleteCategoryKey = "api/requests/categories/{id}/delete";

export function useFetchDeleteCategory({ options }: IUseFetchDeleteCategory) {
  return useMutation(
    async (payload) => {
      return await fetchDeleteCategory({
        path: payload.path,
      });
    },
    {
      ...options,
      mutationKey: useFetchDeleteCategoryKey,
      onSuccess: (data, variables, context) => {
        message.success("Categoria removida!");
        queryClient.invalidateQueries(useFetchGetCategoriesKey);
        if (typeof options?.onSuccess === "function") {
          options.onSuccess(data, variables, context);
        }
      },
    }
  );
}
