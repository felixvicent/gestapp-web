import { CategoryDTO, CategoryForm } from "@/api/types";
import { api, apiException } from "@/services/api";

export interface FetchCreateCategoryPayload {
  body: CategoryForm;
}

export async function fetchCreateCategory({
  body,
}: FetchCreateCategoryPayload) {
  try {
    const response = await api.post<CategoryDTO>("/categories", body);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
