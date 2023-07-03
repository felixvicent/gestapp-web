import { api, apiException } from "@/services/api";

export interface FetchDeleteCategoryPayload {
  path: {
    id: string;
  };
}

export async function fetchDeleteCategory({
  path,
}: FetchDeleteCategoryPayload) {
  try {
    const response = await api.delete<void>(`/categories/${path.id}`);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
