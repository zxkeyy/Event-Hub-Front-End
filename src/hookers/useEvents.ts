import { useQuery } from "@tanstack/react-query";
import useEventQueryStore, { EventQuery } from "../store";
import APIClient, { GetResponse } from "../services/api-client";

const apiClient = new APIClient<Event>("/events");

export interface Event {
  id?: number;
  name: string;
  image: string | File;
  clubs: number[];
  start_date: string;
  end_date: string;
  location_name: string;
  location_id: string;
  description: string;
  body: string;
  slug: string;
}


const useEvents = (query?: EventQuery) => {
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
  });
};

export default useEvents;
