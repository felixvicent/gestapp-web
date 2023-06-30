import { UserDTO } from "@/api/types";
import { IUseFetchAutenticateMutateFunction } from "@/hooks/api";
import { ReactNode } from "react";

export interface IsSessionContextProvider {
  children: ReactNode;
}

export interface ISessionContext {
  token?: string;
  user?: UserDTO;
  fetchAuthenticate: IUseFetchAutenticateMutateFunction;
  isAuthenticatingLoading: boolean;
}
