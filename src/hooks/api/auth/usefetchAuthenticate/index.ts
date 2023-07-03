import { useMutation } from "react-query";
import { IUseFetchAutenticate } from "./interface";
import { fetchAuthenticate } from "@/api/requests/auth/post";

export const useFetchAuthenticateKey = "api/requests/auth/post";

export function useFetchAuthenticate({ options }: IUseFetchAutenticate) {
  return useMutation(
    async (payload) => {
      return await fetchAuthenticate({ body: payload });
    },
    { ...options, mutationKey: useFetchAuthenticateKey }
  );
}
