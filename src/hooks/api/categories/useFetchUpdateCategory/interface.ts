import { FetchUpdateCategoryPayload } from "@/api/requests/categories/{id}/put";
import { CategoryDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchUpdateCategory {
  options?: UseMutationOptions<
    CategoryDTO,
    IApiErrorResponse,
    FetchUpdateCategoryPayload
  >;
}
