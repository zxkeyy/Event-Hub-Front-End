import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";
import { Event } from "./useEvents";

const apiClient = new APIClient<Category>("/categories");

export interface Category {
  id: number;
  name: string;
  image: string;
  events: Event[];
}

const useCategories = () =>
  useQuery<GetResponse<Category>, Error>({
    queryKey: ["categories"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export default useCategories;
