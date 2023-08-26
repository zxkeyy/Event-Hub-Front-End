import axios, { AxiosRequestConfig } from "axios";

export interface GetResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Authorization: localStorage.getItem("notatoken")
      ? "Token " + localStorage.getItem("notatoken")?.toString()
      : null,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<GetResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
