import { Box, Divider, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";
import parseDate from "../services/parse-date";
import OSMap from "./OSMap";
import useMapLookup from "../hookers/useMapLookup";
import { Event } from "../hookers/useEvents";

interface Props {
  event: Event;
}

const EventDetailsCard = ({ event }: Props) => {
  const { data, error: mapError } = useMapLookup(event?.location_id!);

  return (
    <Box
      border="1px"
      borderRadius={15}
      borderColor="whiteAlpha.200"
      bgColor="purple.900"
      width={{ base: "100%", md: "40%", lg: "30%" }}
      padding={5}
      position="sticky"
      bottom="2"
    >
      <Image src={event.image} width="100%" borderRadius={10} />
      <Box paddingTop={5}>
        <Heading fontSize="3xl">{event.name}</Heading>
        <Divider />
        <Box color="GrayText" paddingTop={5}>
          <HStack>
            <Box>
              <MdCalendarMonth />
            </Box>
            <Text fontSize="sm">
              {parseDate(event.start_date, event.end_date).toUpperCase()}
            </Text>
          </HStack>
          <HStack paddingTop={2} paddingBottom={5}>
            <Box>
              <MdLocationPin />
            </Box>
            <Text fontSize="sm" noOfLines={0}>
              {event.location_name}
            </Text>
          </HStack>
          <Box
            border="2px"
            borderRadius={10}
            borderColor="whiteAlpha.200"
            overflow="hidden"
          >
            {!mapError && data && data[0] && <OSMap locationData={data[0]} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetailsCard;
