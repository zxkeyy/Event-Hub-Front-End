import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Event {
  id: number;
  name: string;
}

interface GetEventsResponse {
  count: number;
  results: Event[];
}

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GetEventsResponse>("/events.json", { signal: controller.signal })
      .then((res) => setEvents(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { events, error };
};

export default useEvents;
