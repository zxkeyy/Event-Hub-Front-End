import useData from "./useData";

export interface Club {
  id: number;
  name: string;
  image: string;
}

const useClubs = () => useData<Club>('/clubs');

export default useClubs;