import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Club {
  id: number;
  name: string;
  image: string;
}

interface GetClubsResponse {
  count: number;
  results: Club[];
}

const useClubs = () => {
  const [clubs, setEvents] = useState<Club[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GetClubsResponse>("/clubs.json", { signal: controller.signal })
      .then((res) => setEvents(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { clubs, error };
};

export default useClubs;