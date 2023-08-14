import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { BsGeoAlt } from "react-icons/bs";
import useMapLookup from "../hookers/useMapLookup";
import OSMap from "./OSMap";

interface Props {
  locationId: string;
  locationName: string;
}

const LocationInfo = ({ locationId, locationName }: Props) => {
  const { data, error } = useMapLookup(locationId);

  if (error)
    return (
      <Box>
        <HStack padding={2}>
          <BsGeoAlt size={40} />
          <Text fontWeight="semibold">{locationName}</Text>
        </HStack>
        <Center>
          <Text>Can't find map data.</Text>
        </Center>
      </Box>
    );

  return (
    <Box>
      <HStack padding={2}>
        <BsGeoAlt size={40} />
        <Text fontWeight="semibold">{locationName}</Text>
      </HStack>
      {data && data[0] && <OSMap locationData={data[0]} />}
    </Box>
  );
};

export default LocationInfo;
