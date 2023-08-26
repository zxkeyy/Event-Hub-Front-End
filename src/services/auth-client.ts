import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/auth/",
  headers: {
    Authorization: localStorage.getItem("notatoken")
      ? "Token " + localStorage.getItem("notatoken")?.toString()
      : null,
  },
});

class AuthClient {
  get = (endpoint: string) => {
    return axiosInstance.get(endpoint).then((res) => res.data);
  };

  post = (config: {}, endpoint: string) => {
    return axiosInstance.post(endpoint, config).then((res) => res.data);
  };
}

export default AuthClient;
