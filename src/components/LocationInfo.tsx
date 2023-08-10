import { Box, HStack, Text } from "@chakra-ui/react";
import { BsGeoAlt } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useMapLookup from "../hookers/useMapLookup";

interface Props {
  locationId: string;
  locationName: string;
}

const LocationInfo = ({ locationId, locationName }: Props) => {
  const { data, isLoading, error } = useMapLookup(locationId);

  return (
    <Box>
      <HStack padding={2}>
        <BsGeoAlt size={40} />
        <Text fontWeight="semibold">{locationName}</Text>
      </HStack>
      {data && data[0] && (
        <MapContainer
          center={[parseFloat(data[0].lat), parseFloat(data[0].lon)]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[parseFloat(data[0].lat), parseFloat(data[0].lon)]}>
            <Popup>{data[0].name}</Popup>
          </Marker>
        </MapContainer>
      )}
    </Box>
  );
};

export default LocationInfo;
