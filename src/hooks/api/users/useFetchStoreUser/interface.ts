import { CreateUserForm, UserDTO } from "@/api/types";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutationOptions } from "react-query";

export interface IUseFetchStoreUser {
  options?: UseMutationOptions<UserDTO, IApiErrorResponse, CreateUserForm>;
}
