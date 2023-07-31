import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventsGrid from "./components/EventsGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav" bg="light red">
        <NavBar/>
      </GridItem>
      <GridItem area="main" bg="cyan">
        <EventsGrid/>
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="gold">
          side
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
