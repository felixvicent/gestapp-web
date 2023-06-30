import { SessionContext } from "@/contexts/SessionContext";
import { useContext } from "react";

export function useSession() {
  return useContext(SessionContext);
}
