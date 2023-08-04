import useEventQueryStore from "../store";
import useData from "./useData";

export interface Event {
  id: number;
  name: string;
  image: string;
  clubs: number[];
  start_date: string;
  location_name: string;
  description: string;
}

const useEvents = () => {
  const eventQuery = useEventQueryStore((s) => s.eventQuery);
  return useData<Event>("/events", { params: eventQuery }, [eventQuery]);
};

export default useEvents;
