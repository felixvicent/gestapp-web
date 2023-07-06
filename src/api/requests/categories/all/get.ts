import { CategoryDTO, Page } from "@/api/types";
import { api, apiException } from "@/services/api";

export async function fetchGetAllCategories() {
  try {
    const response = await api.get<CategoryDTO[]>("/categories/all");

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
