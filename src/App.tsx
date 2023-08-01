import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventsGrid from "./components/EventsGrid";
import SelectWilaya from "./components/SelectWilaya";
import { useState } from "react";

function App() {
  const [selectedWilaya, setSelectedWilaya] = useState<number | null>(null)

  return (
    <Grid templateAreas={'"nav" "main"'}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Box padding={20}>
          <HStack paddingBottom={10}>
            <Heading>Events in</Heading>
            <SelectWilaya onSelectWilaya={(n) => setSelectedWilaya(n)}/>
          </HStack>

          <EventsGrid selectedWilaya={selectedWilaya}/>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
