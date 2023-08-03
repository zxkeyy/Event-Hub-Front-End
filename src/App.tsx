import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventsGrid from "./components/EventsGrid";
import SelectWilaya from "./components/SelectWilaya";
import { useState } from "react";
import CategoryGrid from "./components/CategoryGrid";
import { Category } from "./hookers/useCategories";

function App() {
  const [selectedWilaya, setSelectedWilaya] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  return (
    <Grid templateAreas={'"nav" "main"'}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Box padding={20}>
          <HStack paddingBottom={10}>
            <Heading>Events in</Heading>
            <SelectWilaya
              onSelectWilaya={(wilaya) => setSelectedWilaya(wilaya)}
            />
          </HStack>
          <Heading size="md">Choose a Category:</Heading>
          <Box padding={3}>
            <CategoryGrid
              selectedCategory={selectedCategory}
              onClickCategory={(categories) => setSelectedCategory(categories)}
            />
          </Box>

          <EventsGrid
            selectedWilaya={selectedWilaya}
            selectedCategory={selectedCategory}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
