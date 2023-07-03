import { fetchStoreUser } from "@/api/requests/users/post";
import { useMutation } from "react-query";
import { IUseFetchStoreUser } from "./interface";

export const useFetchStoreUserKey = "api/requests/users/post";

export function useFetchStoreUser({ options }: IUseFetchStoreUser) {
  return useMutation(
    async (payload) => {
      return await fetchStoreUser({ body: payload });
    },
    { ...options, mutationKey: useFetchStoreUserKey }
  );
}
