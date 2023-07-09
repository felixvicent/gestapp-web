import { CategoryType, GraphicDTO } from "@/api/types";
import { api, apiException } from "@/services/api";

export interface fetchGetDashboardGraphicPayload {
  path: {
    type: CategoryType;
  };
}

export async function fetchGetDashboardGraphic({
  path,
}: fetchGetDashboardGraphicPayload) {
  try {
    const response = await api.get<GraphicDTO[]>(
      `/dashboard/graphic/${path.type}?v_${Math.random()}`
    );

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
