import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Event } from "./useEvents";

const apiClient = new APIClient<Event>("/events");

const useEvent = (slug: string) =>
  useQuery({
    queryKey: ["event", slug],
    queryFn: () => apiClient.get(slug),
  });

export const postEvent = async (event: any) => {
  return await apiClient.post(event);
};

export const deleteEvent = async (slug: string) => {
  return await apiClient.delete(slug);
};

export default useEvent;
