import { create } from "zustand";

interface EventQuery {
  wilaya?: number | null;
  category?: number | null;
  searchText?: string;
}

interface EventQueryStore {
  eventQuery: EventQuery;
  setWilaya: (wilaya: number | null) => void;
  setCategory: (category: number | null) => void;
  setSearchText: (searchText: string) => void;
}

const useEventQueryStore = create<EventQueryStore>((set) => ({
  eventQuery: {},
  setSearchText: (searchText) => set(() => ({ eventQuery: { searchText } })),
  setWilaya: (wilaya) => {
    set((store) => ({ eventQuery: { ...store.eventQuery, wilaya } }));
  },
  setCategory: (category) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, category } })),
}));

export default useEventQueryStore;
