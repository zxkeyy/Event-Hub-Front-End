import { useParams } from "react-router-dom";
import useEvent from "../hookers/useEvent";
import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import MarkdownDetailsBox from "../components/MarkdownDetailsBox";
import EventDetailsCard from "../components/EventDetailsCard";
import ClubCard from "../components/ClubCard";

const EventDetailPage2 = () => {
  const { slug } = useParams();
  const { data: event, isLoading, error } = useEvent(slug!);

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
      <Box
        width={{ base: "95%", xl: "80%" }}
        paddingY={{ base: 3, md: 10 }}
        
      >
        <Stack direction={{ base: "column", md: "row" }} alignItems="start">
          <Box width={{ base: "100%", md: "40%", lg: "30%" }}>
            <EventDetailsCard event={event} />
            <Box
              border="1px"
              borderRadius={15}
              borderColor="whiteAlpha.200"
              bgColor="purple.900"
              padding={5}
              marginTop={2}
            >
              <Heading fontSize="xl">Organizers</Heading>
              <Divider paddingY={1} />
              {event.clubs.map((clubId) => (
                <ClubCard key={clubId} clubId={clubId} />
              ))}
            </Box>
          </Box>

          <MarkdownDetailsBox markdown={event.body} />
        </Stack>
      </Box>
    </Box>
  );
};

export default EventDetailPage2;
