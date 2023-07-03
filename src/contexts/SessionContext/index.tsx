"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { ISessionContext, IsSessionContextProvider } from "./interface";
import { UserDTO } from "@/api/types";
import { useFetchAuthenticate } from "@/hooks/api";
import { usePathname, useRouter } from "next/navigation";
import { message } from "antd";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "@/configs/sessionConfig";
import { api } from "@/services/api";

export const SessionContext = createContext({} as ISessionContext);

export function SessionContextProvider({ children }: IsSessionContextProvider) {
  const { push } = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<UserDTO>();

  const setTokenOnStorageAndApiBearerToken = useCallback((token: string) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  const setUserOnStorage = useCallback((user: UserDTO) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }, []);

  const removeTokenOnStorageAndApiBearerToken = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    api.defaults.headers.common["Authorization"] = "";
  }, []);

  const removeUserOnStorage = useCallback(() => {
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const { mutate: fetchAuthenticate, isLoading: isAuthenticatingLoading } =
    useFetchAuthenticate({
      options: {
        onSuccess: (data) => {
          push("/");
          setToken(data.token.token);
          setUser(data.user);
          setTokenOnStorageAndApiBearerToken(data.token.token);
          setUserOnStorage(data.user);
        },
        onError: (error) => {
          message.error(error.message);
        },
      },
    });

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const user = localStorage.getItem(USER_STORAGE_KEY);

    if (!token || typeof token !== "string" || !user) {
      removeTokenOnStorageAndApiBearerToken();
      removeUserOnStorage();
      setToken(undefined);
      setUser(undefined);
      if (!pathname.includes("/auth")) {
        push("/auth/login");
      }
      return;
    }

    setToken(token);
    setUser(JSON.parse(user));
  }, [
    removeTokenOnStorageAndApiBearerToken,
    push,
    removeUserOnStorage,
    pathname,
  ]);

  return (
    <SessionContext.Provider
      value={{ user, token, fetchAuthenticate, isAuthenticatingLoading }}
    >
      {children}
    </SessionContext.Provider>
  );
}
