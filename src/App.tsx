import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventsGrid from "./components/EventsGrid";
import SelectWilaya from "./components/SelectWilaya";
import CategoryGrid from "./components/CategoryGrid";

function App() {
  return (
    <Grid templateAreas={'"nav" "main"'}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Box padding={{ base: 4, md: 20 }}>
          <HStack paddingBottom={10}>
            <Heading size={{ base: "md", md: "lg" }}>Events in</Heading>
            <SelectWilaya />
          </HStack>
          <Heading size="md">Choose a Category:</Heading>
          <Box padding={3}>
            <CategoryGrid />
          </Box>

          <EventsGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
