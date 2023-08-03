import useData from "./useData";
import { Event } from "./useEvents";

export interface Category {
  id: number;
  name: string;
  image: string;
  events: Event[];
}

const useCategories = () => useData<Category>('/categories');

export default useCategories;