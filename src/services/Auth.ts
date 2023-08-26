import AuthClient from "./auth-client";
import axios from "axios";

const authClient = new AuthClient();

export const handleLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/auth/token/login",
      {
        username,
        password,
      }
    );

    const token = response.data.auth_token;
    localStorage.setItem("notatoken", token);

    window.location.href = "/";
  } catch (error) {
    console.error("Login error:", error);
  }
};
