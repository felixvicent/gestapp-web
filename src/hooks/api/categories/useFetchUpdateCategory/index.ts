import { useMutation } from "react-query";
import { IUseFetchUpdateCategory } from "./interface";
import { queryClient } from "@/services/queryClient";
import { useFetchGetCategoriesKey } from "../useFetchGetCategories";
import { message } from "antd";
import { fetchUpdateCategory } from "@/api/requests/categories/{id}/put";

export const useFetchUpdateCategoryKey = "api/requests/categories/{id}/put";

export function useFetchUpdateCategory({ options }: IUseFetchUpdateCategory) {
  return useMutation(
    async (payload) => {
      return await fetchUpdateCategory({
        body: payload.body,
        path: payload.path,
      });
    },
    {
      ...options,
      mutationKey: useFetchUpdateCategoryKey,
      onSuccess: (data, variables, context) => {
        message.success("Categoria atualizada!");
        queryClient.invalidateQueries(useFetchGetCategoriesKey);
        if (typeof options?.onSuccess === "function") {
          options.onSuccess(data, variables, context);
        }
      },
    }
  );
}
