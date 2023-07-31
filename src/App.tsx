import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav" bg="blue">
        <NavBar/>
      </GridItem>
      <GridItem area="main" bg="red">
        main
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="yellow">
          side
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
