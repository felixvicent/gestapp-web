import { useMutation } from "react-query";
import { IUseFetchUpdateTransaction } from "./interface";
import { queryClient } from "@/services/queryClient";
import { message } from "antd";
import { fetchUpdateTransaction } from "@/api/requests/transactions/{id}/put";
import { useFetchGetTransactionsKey } from "../useFetchGetTransactions";
import { useFetchGetDashboardGraphicExpenseKey } from "../../dashboard/useFetchGetDashboardGraphicExpense";
import { useFetchGetDashboardGraphicIncomeKey } from "../../dashboard/useFetchGetDashboardGraphicIncome";

export const useFetchUpdateTransactionKey =
  "api/requests/transactions/{id}/put";

export function useFetchUpdateTransaction({
  options,
}: IUseFetchUpdateTransaction) {
  return useMutation(
    async (payload) => {
      return await fetchUpdateTransaction({
        body: payload.body,
        path: payload.path,
      });
    },
    {
      ...options,
      mutationKey: useFetchUpdateTransactionKey,
      onSuccess: (data, variables, context) => {
        message.success("Transação atualizada!");
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
