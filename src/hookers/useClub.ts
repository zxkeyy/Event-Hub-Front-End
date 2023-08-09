import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Club } from "./useClubs";

const apiClient = new APIClient<Club>("/clubs");

const useClub = (clubId: number) =>
  useQuery({
    queryKey: ["club", clubId],
    queryFn: () => apiClient.get(clubId),
  });

export default useClub;
