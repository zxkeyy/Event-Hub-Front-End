import AuthClient from "./auth-client";

const authClient = new AuthClient();
const TOKEN_KEY = "notatoken";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  await authClient.post(
    {
      username,
      email,
      password,
    },
    "users/"
  );

  logout();
};

export const login = async (username: string, password: string) => {
  const response = await authClient.post(
    {
      username,
      password,
    },
    "token/login"
  );

  const token = response.auth_token;
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const validateCurrentToken = async () => {
  try {
    if (!localStorage.getItem(TOKEN_KEY)) return false;
    await authClient.get("/users/me");
    return true;
  } catch (error) {
    logout();
    return false;
  }
};

export default {
  register,
  login,
  logout,
  getToken,
  validateCurrentToken,
};
