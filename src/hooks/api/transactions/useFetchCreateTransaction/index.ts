import { useMutation } from "react-query";
import { queryClient } from "@/services/queryClient";
import { message } from "antd";
import { IUseFetchCreateTransaction } from "./interface";
import { fetchCreateTransaction } from "@/api/requests/transactions/post";
import { useFetchGetTransactionsKey } from "../useFetchGetTransactions";
import { useFetchGetDashboardGraphicExpenseKey } from "../../dashboard/useFetchGetDashboardGraphicExpense";
import { useFetchGetDashboardGraphicIncomeKey } from "../../dashboard/useFetchGetDashboardGraphicIncome";

export const useFetchCreateTransactionKey = "api/requests/transactions/post";

export function useFetchCreateTransaction({
  options,
}: IUseFetchCreateTransaction) {
  return useMutation(
    async (payload) => {
      return await fetchCreateTransaction({ body: payload.body });
    },
    {
      ...options,
      mutationKey: useFetchCreateTransactionKey,
      onSuccess: (data, variables, context) => {
        message.success("Transação criada!");
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
