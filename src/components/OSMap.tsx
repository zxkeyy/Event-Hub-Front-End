import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LocationData } from "../hookers/useMapLookup";

interface Props {
  locationData: LocationData;
}

const OSMap = ({ locationData }: Props) => {
  return (
    <MapContainer
      center={[parseFloat(locationData.lat), parseFloat(locationData.lon)]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[parseFloat(locationData.lat), parseFloat(locationData.lon)]}
      >
        <Popup>{locationData.display_name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OSMap;
