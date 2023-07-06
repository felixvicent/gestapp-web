import { QueryKey, useQuery } from "react-query";
import { Page } from "@/api/types/Page";
import { IApiErrorResponse } from "@/services/api/interface";
import { IUseFetchGetTransactions } from "./interface";
import { TransactionDTO } from "@/api/types";
import { fetchGetTransactions } from "@/api/requests/transactions/get";

export const useFetchGetTransactionsKey = "api/requests/transactions/get";

export function useFetchGetTransactions({
  dependencyArray = [],
  options,
  payload = {
    page: 0,
  },
}: IUseFetchGetTransactions) {
  return useQuery<
    Page<TransactionDTO>,
    IApiErrorResponse,
    Page<TransactionDTO>,
    QueryKey
  >(
    [useFetchGetTransactionsKey, dependencyArray],
    async () => {
      return await fetchGetTransactions({
        query: payload,
      });
    },
    options
  );
}
