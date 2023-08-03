import { Category } from "./useCategories";
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

const useEvents = (
  selectedWilaya: number | null,
  selectedCategory: Category | null
) =>
  useData<Event>(
    "/events",
    { params: { wilaya: selectedWilaya, category: selectedCategory?.id } },
    [selectedWilaya, selectedCategory]
  );

export default useEvents;
