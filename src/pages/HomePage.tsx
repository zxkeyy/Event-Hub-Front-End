import { HStack, Heading, Box } from "@chakra-ui/react";
import CategoryGrid from "../components/CategoryGrid";
import EventsGrid from "../components/EventsGrid";
import SelectWilaya from "../components/SelectWilaya";
import "leaflet/dist/leaflet.css"

const HomePage = () => {
  return (
    <Box padding={{ base: 4, md: 20 }}>
      <HStack paddingBottom={10}>
        <Heading size={{ base: "md", md: "lg" }}>Events in</Heading>
        <SelectWilaya />
      </HStack>
      <Heading size="md">Choose a Category:</Heading>
      <Box padding={3}>
        <CategoryGrid />
      </Box>
      <EventsGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={{ base: 1, md: 5 }}/>
    </Box>
  );
};

export default HomePage;
