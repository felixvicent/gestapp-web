import { useMutation } from "react-query";
import { IUseFetchDeleteTransaction } from "./interface";
import { queryClient } from "@/services/queryClient";
import { message } from "antd";
import { fetchDeleteTransaction } from "@/api/requests/transactions/{id}/delete";
import { useFetchGetTransactionsKey } from "../useFetchGetTransactions";
import { useFetchGetDashboardGraphicExpenseKey } from "../../dashboard/useFetchGetDashboardGraphicExpense";
import { useFetchGetDashboardGraphicIncomeKey } from "../../dashboard/useFetchGetDashboardGraphicIncome";

export const useFetchDeleteCategoryKey =
  "api/requests/transactions/{id}/delete";

export function useFetchDeleteTransaction({
  options,
}: IUseFetchDeleteTransaction) {
  return useMutation(
    async (payload) => {
      return await fetchDeleteTransaction({
        path: payload.path,
      });
    },
    {
      ...options,
      mutationKey: useFetchDeleteCategoryKey,
      onSuccess: (data, variables, context) => {
        message.success("Transação removida!");
        queryClient.invalidateQueries(useFetchGetTransactionsKey);
        queryClient.invalidateQueries(useFetchGetDashboardGraphicExpenseKey);
        queryClient.invalidateQueries(useFetchGetDashboardGraphicIncomeKey);
        if (typeof options?.onSuccess === "function") {
          options.onSuccess(data, variables, context);
        }
      },
    }
  );
}
