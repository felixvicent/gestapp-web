import { CategoryDTO, CategoryForm } from "@/api/types";
import { api, apiException } from "@/services/api";

export interface FetchUpdateCategoryPayload {
  body: CategoryForm;
  path: {
    id: string;
  };
}

export async function fetchUpdateCategory({
  body,
  path,
}: FetchUpdateCategoryPayload) {
  try {
    const response = await api.put<CategoryDTO>(`/categories/${path.id}`, body);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
