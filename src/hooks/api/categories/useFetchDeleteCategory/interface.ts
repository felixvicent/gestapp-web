import { FetchDeleteCategoryPayload } from "@/api/requests/categories/{id}/delete";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchDeleteCategory {
  options?: UseMutationOptions<
    void,
    IApiErrorResponse,
    FetchDeleteCategoryPayload
  >;
}
