import { AuthenticateForm } from "@/api/types";
import { AuthenticateDTO } from "@/api/types/AuthenticateDTO";
import { api, apiException } from "@/services/api";

interface fetchAuthenticatePayload {
  body: AuthenticateForm;
}

export async function fetchAuthenticate({ body }: fetchAuthenticatePayload) {
  try {
    const response = await api.post<AuthenticateDTO>("/auth", body);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
