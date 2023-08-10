import { useQuery } from "@tanstack/react-query";
import useEventQueryStore from "../store";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Event>("/events");

export interface Event {
  id: number;
  name: string;
  image: string;
  clubs: number[];
  start_date: string;
  end_date: string;
  location_name: string;
  location_id: string;
  description: string;
  body: string
  slug: string;
}

const useEvents = () => {
  const eventQuery = useEventQueryStore((s) => s.eventQuery);
  return useQuery<GetResponse<Event>, Error>({
    queryKey: ["events", eventQuery],
    queryFn: () => apiClient.getAll({ params: eventQuery }),
  });
};

export default useEvents;
