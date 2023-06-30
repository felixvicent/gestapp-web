import { AuthenticateForm } from "@/api/types";
import { AuthenticateDTO } from "@/api/types/AuthenticateDTO";
import { IApiErrorResponse } from "@/services/api/interface";
import { UseMutateFunction, UseMutationOptions } from "react-query";

export interface IUseFetchAutenticate {
  options?: UseMutationOptions<
    AuthenticateDTO,
    IApiErrorResponse,
    AuthenticateForm
  >;
}

export interface IUseFetchAutenticateMutateFunction
  extends UseMutateFunction<
    AuthenticateDTO,
    IApiErrorResponse,
    AuthenticateForm,
    unknown
  > {}
