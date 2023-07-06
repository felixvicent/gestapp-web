import { FetchDeleteTransactionPayload } from "@/api/requests/transactions/{id}/delete";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchDeleteTransaction {
  options?: UseMutationOptions<
    void,
    IApiErrorResponse,
    FetchDeleteTransactionPayload
  >;
}
