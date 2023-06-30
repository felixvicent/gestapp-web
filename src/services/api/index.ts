import axios, { isAxiosError } from "axios";
import { IApiErrorResponse } from "./interface";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiException = (error: any) => {
  if (!isAxiosError(error)) {
    const errorMessage = (error?.message as string) || "Indefinido";

    return {
      message: "Client error: " + errorMessage,
      type: "node exception",
      code: undefined,
    };
  }

  const axiosError = error as IApiErrorResponse;

  return {
    message: axiosError.response?.data?.message || "Ocorreu um erro inesperado",
    type: "api request exception",
    code: axiosError.response?.status,
  };
};
