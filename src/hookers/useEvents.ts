import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Event {
  id: number;
  name: string;
  image: string;
  clubs: number[];
  start_date: string;
  location_name: string;
  description: string;
}

interface GetEventsResponse {
  count: number;
  results: Event[];
}

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    //setLoading(true)
    apiClient
      .get<GetEventsResponse>("/events.json", { signal: controller.signal })
      .then((res) => {
        setEvents(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { events, error, isLoading };
};

export default useEvents;
