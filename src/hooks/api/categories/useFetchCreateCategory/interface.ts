import { FetchCreateCategoryPayload } from "@/api/requests/categories/post";
import { CategoryDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchCreateCategory {
  options?: UseMutationOptions<
    CategoryDTO,
    IApiErrorResponse,
    FetchCreateCategoryPayload
  >;
}
