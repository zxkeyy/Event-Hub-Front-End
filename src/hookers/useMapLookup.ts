import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/nominatim-api-client";

export interface Adress {
  road: string;
  town: string;
  county: string;
  state: string;
}

export interface LocationData {
  name: string;
  display_name: string;
  lat: string;
  lon: string;
  adress: Adress;
}

const apiClient = new APIClient<LocationData>("/lookup");

const useMapLookup = (id: string) =>
  useQuery({
    queryKey: ["map lookup", id],
    queryFn: () => apiClient.get({ params: { osm_ids: id, format: "json" } }),
  });
export default useMapLookup;
