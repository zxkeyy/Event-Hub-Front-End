import axios, { AxiosRequestConfig } from "axios";

export interface GetResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  params: {
    //Authorization: "Token 1efbfcd8b31cb84e33c52744f4dd3836c909a599"
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
}

export default APIClient;