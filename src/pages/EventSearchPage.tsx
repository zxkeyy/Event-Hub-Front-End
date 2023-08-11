import { Grid, GridItem } from "@chakra-ui/react";
import EventsGrid from "../components/EventsGrid";
import EventSearchFilters from "../components/EventSearchFilters";

const EventSearchPage = () => {
  return (
    <Grid templateAreas={'"filters content"'} templateColumns={"0.3fr 1fr"}>
      <GridItem area="filters">
        <EventSearchFilters/>
      </GridItem>
      <GridItem area="content" padding={10}>
        <EventsGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 4 }}
          spacing={{ base: 1, md: 5 }}
        />
      </GridItem>
    </Grid>
  );
};

export default EventSearchPage;
