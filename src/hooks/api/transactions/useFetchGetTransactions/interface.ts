import { TransactionDTO } from "@/api/types";
import { Page } from "@/api/types/Page";
import { IApiErrorResponse } from "@/services/api/interface";
import { QueryKey, UseQueryOptions } from "react-query";

export interface IUseFetchGetTransactions {
  dependencyArray?: any[];
  options?: UseQueryOptions<
    Page<TransactionDTO>,
    IApiErrorResponse,
    Page<TransactionDTO>,
    QueryKey
  >;
  payload?: {
    page: number;
  };
}
