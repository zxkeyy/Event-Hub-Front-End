import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/api-client";
import { Event } from "./useEvents";

export interface Category {
  id: number;
  name: string;
  image: string;
  events: Event[];
}

const useCategories = () =>
  useQuery<GetResponse<Category>, Error>({
    queryKey: ["categories"],
    queryFn: () =>
      apiClient
        .get<GetResponse<Category>>("/categories")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export default useCategories;
