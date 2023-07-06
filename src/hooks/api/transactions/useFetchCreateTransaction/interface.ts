import { FetchCreateTransactionPayload } from "@/api/requests/transactions/post";
import { TransactionDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchCreateTransaction {
  options?: UseMutationOptions<
    TransactionDTO,
    IApiErrorResponse,
    FetchCreateTransactionPayload
  >;
}
