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

const useEvents = (selectedWilaya: number | null) => useData<Event>('/events', {params: {wilaya: selectedWilaya}}, [selectedWilaya]);

export default useEvents;
