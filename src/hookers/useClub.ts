import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Club } from "./useClubs";

const apiClient = new APIClient<Club>("/clubs");

const useClub = (clubId: number) =>
  useQuery({
    queryKey: ["club", clubId],
    queryFn: () => apiClient.get(clubId),
  });

export const postClub = async (club: any) => {
  return await apiClient.post(club);
};

export const putClub = async (id: number, event: any) => {
  return await apiClient.put(id, event);
};

export const deleteClub = async (id: number) => {
  return await apiClient.delete(id);
};

export default useClub;
