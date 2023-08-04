import { useQuery } from "@tanstack/react-query";
import useEventQueryStore from "../store";
import apiClient, { GetResponse } from "../services/api-client";

export interface Event {
  id: number;
  name: string;
  image: string;
  clubs: number[];
  start_date: string;
  location_name: string;
  description: string;
  slug: string;
}

const useEvents = () => {
  const eventQuery = useEventQueryStore((s) => s.eventQuery);
  return useQuery<GetResponse<Event>, Error>({
    queryKey: ["events", eventQuery],
    queryFn: () =>
      apiClient
        .get<GetResponse<Event>>("/events", { params: eventQuery })
        .then((res) => res.data),
  });
};

export default useEvents;
