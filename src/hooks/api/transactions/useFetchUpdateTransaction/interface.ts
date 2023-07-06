import { FetchUpdateTransactionPayload } from "@/api/requests/transactions/{id}/put";
import { TransactionDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchUpdateTransaction {
  options?: UseMutationOptions<
    TransactionDTO,
    IApiErrorResponse,
    FetchUpdateTransactionPayload
  >;
}
