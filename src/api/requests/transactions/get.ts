import { Page, TransactionDTO } from "@/api/types";
import { api, apiException } from "@/services/api";

interface fetchGetTransactionsPayload {
  query: {
    page: number;
  };
}

export async function fetchGetTransactions({
  query,
}: fetchGetTransactionsPayload) {
  try {
    const response = await api.get<Page<TransactionDTO>>("/transactions", {
      params: query,
    });

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
