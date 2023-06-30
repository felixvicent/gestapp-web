import { CreateUserForm, UserDTO } from "@/api/types";
import { api, apiException } from "@/services/api";

interface fetchStoreUserPayload {
  body: CreateUserForm;
}

export async function fetchStoreUser({ body }: fetchStoreUserPayload) {
  try {
    const response = await api.post<UserDTO>("/users", body);

    return response.data;
  } catch (error) {
    throw apiException(error);
  }
}
