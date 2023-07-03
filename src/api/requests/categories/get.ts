import { CategoryDTO, Page } from "@/api/types";
import { api, apiException } from "@/services/api";

interface fetchGetCategoriesPayload {
  query: {
    page: number;
  };
}

export async function fetchGetCategories({ query }: fetchGetCategoriesPayload) {
  try {
    const response = await api.get<Page<CategoryDTO>>("/categories", {
      params: query,
    });

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
