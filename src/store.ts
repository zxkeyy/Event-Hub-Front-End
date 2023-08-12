import { create } from "zustand";

interface EventQuery {
  wilaya?: number | null;
  category?: number | null;
  search?: string;
  tags: number[];
}

interface EventQueryStore {
  eventQuery: EventQuery;
  setWilaya: (wilaya: number | null) => void;
  setCategory: (category: number | null) => void;
  setSearch: (search: string) => void;
  setTags: (tags: number[]) => void;
}

const useEventQueryStore = create<EventQueryStore>((set) => ({
  eventQuery: { tags: [] },
  setSearch: (search) => set(() => ({ eventQuery: { search, tags:[] } })),
  setWilaya: (wilaya) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, wilaya } })),
  setCategory: (category) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, category } })),
  setTags: (tags) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, tags } })),
}));

export default useEventQueryStore;
