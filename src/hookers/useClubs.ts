import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/api-client";

export interface Club {
  id: number;
  name: string;
  image: string;
}

const useClubs = () =>
  useQuery<GetResponse<Club>, Error>({
    queryKey: ["clubs"],
    queryFn: () =>
      apiClient.get<GetResponse<Club>>("/clubs").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h so mosh is happy
  });

export default useClubs;
