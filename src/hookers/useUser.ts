import { useQuery } from "@tanstack/react-query";
import AuthClient from "../services/auth-client";

const authClient = new AuthClient();

export interface User {
  email: string;
  username: string;
}

const useUser = () => {
  if (!localStorage.getItem("notatoken")) return null;
  return useQuery({
    queryKey: ["user"],
    queryFn: () => authClient.get("users/me").catch(() => "hi"),
    retry: false,
  });
};

export default useUser;
