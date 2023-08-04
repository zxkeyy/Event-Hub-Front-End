import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Event } from "./useEvents";

const apiClient = new APIClient<Event>("/events");

const useEvent = (slug: string) =>
  useQuery({
    queryKey: ["events", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useEvent;
