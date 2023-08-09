import { HStack, Text } from "@chakra-ui/react";
import { BsGeoAlt } from "react-icons/bs";

interface Props {
  location: string;
}

const LocationInfo = ({ location }: Props) => {
  return (
    <HStack padding={2}>
        <BsGeoAlt size={40}/>
      <Text fontWeight="semibold">{location}</Text>
    </HStack>
  );
};

export default LocationInfo;
