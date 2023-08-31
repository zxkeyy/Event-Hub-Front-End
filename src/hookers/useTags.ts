import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Tag>("/tags/");

export interface Tag {
  id: number;
  name: string;
  events: Event[];
}

const useTags = (searchQuery?: string) =>
  useQuery<GetResponse<Tag>, Error>({
    queryKey: ["tags", searchQuery],
    queryFn: () => apiClient.getAll({ params: { search: searchQuery } }),
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export const postTag = async (name: string) => {
  return await apiClient.post({ name });
};
export default useTags;
