import { useParams } from "react-router-dom";
import useEvent from "../hookers/useEvent";
import {
  Box,
  Center,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import DateTimeInfo from "../components/DateTimeInfo";
import LocationInfo from "../components/LocationInfo";
import OrganizersInfo from "../components/OrganizersInfo";
import fallBackImage from "../assets/image-not-found.png";

const EventDetailPage = () => {
  const { slug } = useParams();
  const { data: event, isLoading, error } = useEvent(slug!);

  if (isLoading) return null;
  if (error) throw error;
  if (!event) return null;

  return (
    <Box paddingTop={10}>
      <Center>
        <Box
          maxWidth={1175}
          width={{ base: "95%" }}
          bgColor="purple.900"
          borderRadius={15}
        >
          <Center>
            <Image
              borderRadius={3}
              src={event.image}
              fallbackSrc={fallBackImage}
              aspectRatio={2 / 1}
              maxWidth={940}
              width={{ base: "100%" }}
            />
          </Center>
        </Box>
      </Center>
      <Center>
        <Box maxWidth={1175} width={{ base: "95%" }} marginTop={10}>
          <SimpleGrid columns={2} templateColumns={"1fr 0.5fr"}>
            <GridItem>
              <Heading fontSize="5xl" fontFamily="sans-serif">
                {event.name}
              </Heading>
              <Box padding={4} paddingLeft={0}>
                <OrganizersInfo organizerIds={event.clubs} />
              </Box>

              <Box padding={4} paddingLeft={0}>
                <Box
                  border="1px"
                  borderColor="gray.600"
                  borderTopRadius={10}
                  padding={3}
                >
                  <HStack>
                    <BsList size={20} />
                    <Text fontWeight="bold">About</Text>
                  </HStack>
                </Box>
                <Box
                  border="1px"
                  borderTop="0px"
                  borderColor="gray.600"
                  borderBottomRadius={10}
                  padding={5}
                >
                  <ReactMarkdown>{event.body}</ReactMarkdown>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <DateTimeInfo
                startDate={event.start_date}
                endDate={event.end_date}
              />
              <hr />
              <LocationInfo locationId={event.location_id} locationName={event.location_name}/>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  );
};

export default EventDetailPage;
