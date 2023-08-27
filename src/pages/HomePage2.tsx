import { Box, Divider, HStack, Heading } from "@chakra-ui/react";
import useEventQueryStore from "../store";
import HomePageHero from "../components/HomePageHero";
import SelectWilaya from "../components/SelectWilaya";
import EventCarousel from "../components/EventCarousel";

const HomePage2 = () => {
  const clearQuery = useEventQueryStore((s) => s.clearQuery);

  clearQuery();
  return (
    <>
      <HomePageHero />
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
        }}
        display="flex"
        justifyContent="center"
      >
        <Box height="3xl" width={{ base: "85%", md: "60%" }} paddingY={10}>
          <Heading>RECOMMENDED</Heading>
          <Divider />
          <HStack paddingY={10}>
            <Heading>Events In</Heading>
            <SelectWilaya />
          </HStack>
          <EventCarousel />
        </Box>
      </Box>
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(20,5,27,1) 0%, rgba(44,8,57,1) 81%, rgba(40,0,40,1) 100%)",
        }}
        display="flex"
        justifyContent="center"
      >
        <Box height="1xl" width={{ base: "85%", md: "60%" }} paddingY={10}>
          <Heading>RECENTLY ADDED</Heading>
          <Divider marginBottom={5} />
          <EventCarousel
            query={{
              ordering: "-created_at",
              limit: 5,
            }}
          />
        </Box>
      </Box>
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
        }}
        display="flex"
        justifyContent="center"
      >
        <Box height="1xl" width={{ base: "85%", md: "60%" }} paddingY={10}>
          <Heading>STARTING SOON</Heading>
          <Divider marginBottom={5} />
          <EventCarousel
            query={{
              start_date__gt: new Date().toISOString(),
              ordering: "start_date",
              limit: 5,
            }}
          />
        </Box>
      </Box>
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(20,5,27,1) 0%, rgba(44,8,57,1) 81%, rgba(40,0,40,1) 100%)",
        }}
        display="flex"
        justifyContent="center"
      >
        <Box height="1xl" width={{ base: "85%", md: "60%" }} paddingY={10}>
          <Heading>HAPPENING NOW</Heading>
          <Divider marginBottom={5} />
          <EventCarousel
            query={{
              start_date__lt: new Date().toISOString(),
              end_date__gt: new Date().toISOString(),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomePage2;
