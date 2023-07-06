import { TransactionDTO, TransactionForm } from "@/api/types";
import { api, apiException } from "@/services/api";

export interface FetchUpdateTransactionPayload {
  body: TransactionForm;
  path: {
    id: string;
  };
}

export async function fetchUpdateTransaction({
  body,
  path,
}: FetchUpdateTransactionPayload) {
  try {
    const response = await api.put<TransactionDTO>(
      `/transactions/${path.id}`,
      body
    );

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
