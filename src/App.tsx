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
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <GridItem area="main">
        <EventsGrid/>
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg='purple.300'>
          side
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
