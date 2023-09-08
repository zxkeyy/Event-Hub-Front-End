import { create } from "zustand";

export interface UserInfo {
  loggedIn: boolean;
}

interface UserInfoStore {
  userInfo: UserInfo;
  setLoggedIn: (loggedIn: boolean) => void;
}

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  userInfo: { loggedIn: false },
  setLoggedIn: (loggedIn) => set(() => ({ userInfo: { loggedIn } })),
}));

export interface EventQuery {
  wilaya?: number | null;
  category?: number | null;
  search?: string | null;
  start_date__lt?: string | null;
  start_date__gt?: string | null;
  end_date__lt?: string | null;
  end_date__gt?: string | null;
  tags?: number[];
  owner?: number;
  ordering?: string;
  limit?: number;
}

interface EventQueryStore {
  eventQuery: EventQuery;
  clearQuery: () => void;
  setWilaya: (wilaya: number | null) => void;
  setCategory: (category: number | null) => void;
  setSearch: (search: string | null) => void;
  setStartDateLt: (start_date__lt: string | null) => void;
  setStartDateGt: (start_date__gt: string | null) => void;
  setTags: (tags: number[]) => void;
  setOwner: (owner: number) => void;
}

const useEventQueryStore = create<EventQueryStore>((set) => ({
  eventQuery: {},
  clearQuery: () => set(() => ({ eventQuery: {} })),
  setSearch: (search) => set(() => ({ eventQuery: { search } })),
  setWilaya: (wilaya) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, wilaya } })),
  setCategory: (category) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, category } })),
  setStartDateLt: (start_date__lt) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, start_date__lt } })),
  setStartDateGt: (start_date__gt) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, start_date__gt } })),
  setTags: (tags) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, tags } })),
  setOwner: (owner) =>
    set((store) => ({ eventQuery: { ...store.eventQuery, owner } })),
}));

export default useEventQueryStore;
