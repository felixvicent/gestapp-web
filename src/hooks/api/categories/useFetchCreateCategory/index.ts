import { useMutation } from "react-query";
import { IUseFetchCreateCategory } from "./interface";
import { fetchCreateCategory } from "@/api/requests/categories/post";
import { queryClient } from "@/services/queryClient";
import { useFetchGetCategoriesKey } from "../useFetchGetCategories";
import { message } from "antd";

export const useFetchCreateCategoryKey = "api/requests/categories/post";

export function useFetchCreateCategory({ options }: IUseFetchCreateCategory) {
  return useMutation(
    async (payload) => {
      return await fetchCreateCategory({ body: payload.body });
    },
    {
      ...options,
      mutationKey: useFetchCreateCategoryKey,
      onSuccess: (data, variables, context) => {
        message.success("Categoria criada!");
        queryClient.invalidateQueries(useFetchGetCategoriesKey);
        if (typeof options?.onSuccess === "function") {
          options.onSuccess(data, variables, context);
        }
      },
    }
  );
}
