import type { AxiosError } from "axios";

export interface IApiDefaultErrorResponse {
  message?: string;
}

export interface IApiErrorResponse
  extends AxiosError<IApiDefaultErrorResponse> {}
