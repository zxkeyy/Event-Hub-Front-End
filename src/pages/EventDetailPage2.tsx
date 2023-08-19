import { useParams } from "react-router-dom";
import useEvent from "../hookers/useEvent";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import parseDate from "../services/parse-date";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";
import OSMap from "../components/OSMap";
import useMapLookup from "../hookers/useMapLookup";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const EventDetailPage2 = () => {
  const { slug } = useParams();
  const { data: event, isLoading, error } = useEvent(slug!);
  const { data, error: mapError } = useMapLookup(event?.location_id!);

  if (isLoading) return null;
  if (error) throw error;
  if (!event) return null;

  return (
    <Box
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box width={{ base: "95%", xl: "80%" }} paddingY={10}>
        <Stack direction={{ base: "column", md: "row" }} alignItems="start">
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
                  {data && data[0] && <OSMap locationData={data[0]} />}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={{ base: "100%", md: "60%", lg: "70%" }}
            border="1px"
            borderRadius={15}
            borderColor="whiteAlpha.200"
            bgColor="purple.900"
            padding={5}
            overflow="hidden"
          >
            <Heading fontSize="xl">Details</Heading>
            <Divider paddingTop={2} />
            <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
              {event.body}
            </ReactMarkdown>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default EventDetailPage2;
