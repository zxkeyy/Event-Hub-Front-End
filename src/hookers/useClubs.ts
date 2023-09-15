import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Club>("/clubs");

export interface Club {
  id: number;
  name: string;
  description: string;
  body: string;
  image: string;
  events: [{ id: number; slug: string }];
}

const useClubs = (params?: {}, enabled?: boolean) =>
  useQuery<GetResponse<Club>, Error>({
    queryKey: ["clubs"],
    queryFn: () => apiClient.getAll({ params }),
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
    enabled: enabled,
  });

export default useClubs;
