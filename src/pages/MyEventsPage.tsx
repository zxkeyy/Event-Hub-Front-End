import { Box, Button, Divider, HStack, Heading, Stack } from "@chakra-ui/react";
import EventCardHorizontal from "../components/EventCardHorizontal";
import useEvents from "../hookers/useEvents";
import { BiLoaderCircle } from "react-icons/bi";
import useUser from "../hookers/useUser";

const MyEventsPage = () => {
  const ownerId = useUser()?.data?.id;
  const { data: events, isLoading } = useEvents({
    
    ordering: "start_date",
    owner: ownerId,
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={20}
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
    >
      <Box width="50%">
        <Box
          border="1px"
          borderRadius={15}
          borderColor="whiteAlpha.200"
          bgColor="purple.900"
          padding={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginBottom={3}
        >
          <Heading fontSize="2xl">Your Events</Heading>
          <Divider marginY={2} />
          <HStack
            display="flex"
            justifyContent="start"
            width="100%"
            height={10}
          >
            <Button height="100%">Upcoming</Button>
            <Button height="100%">Past</Button>
          </HStack>
        </Box>
        <Box
          border="1px"
          borderRadius={15}
          borderColor="whiteAlpha.200"
          bgColor="purple.900"
          padding={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Stack spacing={6}>
            {isLoading && <BiLoaderCircle />}
            {events?.results.map((event) => (
              <EventCardHorizontal event={event} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default MyEventsPage;
