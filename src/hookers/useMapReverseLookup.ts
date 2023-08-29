import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/nominatim-api-client";

export interface LocationData {
  name: string;
  display_name: string;
  osm_type: string;
  osm_id: number
}

const apiClient = new APIClient<LocationData>("/reverse");

const useMapReverseLookup = (lat: number, lng: number) =>
  useQuery({
    queryKey: ["reverse map lookup", { lat, lng }],
    queryFn: () => apiClient.get({ params: { lat, lon: lng, format: "json" } }),
  });
export default useMapReverseLookup;
