import { TransactionDTO, TransactionForm } from "@/api/types";
import { api, apiException } from "@/services/api";

export interface FetchCreateTransactionPayload {
  body: TransactionForm;
}

export async function fetchCreateTransaction({
  body,
}: FetchCreateTransactionPayload) {
  try {
    const response = await api.post<TransactionDTO>("/transactions", body);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
