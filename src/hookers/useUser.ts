import { useQuery } from "@tanstack/react-query";
import AuthClient from "../services/auth-client";
import Auth from "../services/Auth";

const authClient = new AuthClient();

export interface User {
  email: string;
  username: string;
}

const useUser = () => {
  if (!Auth.getToken()) return null;
  try {
    return useQuery({
      queryKey: ["user"],
      queryFn: () => authClient.get("users/me"),
    });
  } catch (error) {
    Auth.logout();
    return null;
  }
};

export default useUser;
