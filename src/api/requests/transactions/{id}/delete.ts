import { api, apiException } from "@/services/api";

export interface FetchDeleteTransactionPayload {
  path: {
    id: string;
  };
}

export async function fetchDeleteTransaction({
  path,
}: FetchDeleteTransactionPayload) {
  try {
    const response = await api.delete<void>(`/transactions/${path.id}`);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
