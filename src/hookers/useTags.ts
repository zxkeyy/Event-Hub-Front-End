import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Tag>("/tags");

export interface Tag {
  id: number;
  name: string;
  events: Event[];
}

const useTags = () =>
  useQuery<GetResponse<Tag>, Error>({
    queryKey: ["tags"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export default useTags;
