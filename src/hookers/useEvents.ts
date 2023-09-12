import { useQuery } from "@tanstack/react-query";
import useEventQueryStore, { EventQuery } from "../store";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Event>("/events/");

export interface Event {
  id?: number;
  name: string;
  image: string;
  clubs: number[];
  category: number;
  tags: number[];
  start_date: string;
  end_date: string;
  location_name: string;
  location_id: string;
  wilaya: number;
  description: string;
  body: string;
  slug: string;
}

const useEvents = (query?: EventQuery, enabled?: boolean) => {
  const eventQuery = query ? query : useEventQueryStore((s) => s.eventQuery);
  return useQuery<GetResponse<Event>, Error>({
    queryKey: ["events", eventQuery],
    queryFn: () =>
      apiClient.getAll({
        params: eventQuery,
        paramsSerializer: {
          indexes: null, // by default: false
        },
      }),
    enabled: enabled,
  });
};

export default useEvents;
