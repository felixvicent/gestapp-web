import { TokenDTO } from "./TokenDTO";
import { UserDTO } from "./UserDTO";

export type AuthenticateDTO = {
  user: UserDTO;
  token: TokenDTO;
};
