import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Club>("/clubs");

export interface Club {
  id: number;
  name: string;
  image: string;
}

const useClubs = () =>
  useQuery<GetResponse<Club>, Error>({
    queryKey: ["clubs"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export default useClubs;
