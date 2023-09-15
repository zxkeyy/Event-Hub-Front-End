import { useParams } from "react-router-dom";
import useClub from "../hookers/useClub";
import {
  Box,
  Center,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import MarkdownDetailsBox from "../components/MarkdownDetailsBox";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";
import OSMap from "../components/OSMap";
import parseDate from "../services/parse-date";
import EventCard2Slug from "../components/EventCard2Slug";

const HostDetailsPage = () => {
  const { id } = useParams();
  const { data: host, isLoading, error } = useClub(parseInt(id!));

  if (isLoading) return null;
  if (error) throw error;
  if (!host) return null;

  return (
    <Box
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box width={{ base: "95%", xl: "80%" }} paddingY={{ base: 3, md: 10 }}>
        <Stack direction={{ base: "column", md: "row" }} alignItems="start">
          <Box width={{ base: "100%", md: "40%", lg: "30%" }}>
            <Box
              border="1px"
              borderRadius={15}
              borderColor="whiteAlpha.200"
              bgColor="purple.900"
              padding={5}
            >
              <Image src={host.image} width="100%" borderRadius={10} />
              <Box paddingTop={5}>
                <Heading fontSize="3xl">{host.name}</Heading>
                <Divider />
                <Box color="GrayText" paddingTop={5}>
                  <HStack>
                    <Box></Box>
                    <Text fontSize="sm">{host.description}</Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
            <Box
              border="1px"
              borderRadius={15}
              borderColor="whiteAlpha.200"
              bgColor="purple.900"
              padding={5}
              marginTop={2}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Heading fontSize="xl">Events</Heading>
              <Divider marginY={2} />

              {host.events.map((event) => (
                <Box width="60%">
                  <EventCard2Slug key={event.id} slug={event.slug} />
                </Box>
              ))}
            </Box>
          </Box>

          <MarkdownDetailsBox markdown={host.body} />
        </Stack>
      </Box>
    </Box>
  );
};

export default HostDetailsPage;
