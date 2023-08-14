import { Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import EventsGrid from "../components/EventsGrid";
import EventSearchFilters from "../components/EventSearchFilters";
import useEventQueryStore from "../store";

const EventSearchPage = () => {
  const search = useEventQueryStore((s) => s.eventQuery.search)

  return (
    <Grid templateAreas={'"filters content"'} templateColumns={"0.3fr 1fr"}>
      <GridItem area="filters" padding={10}>
        <EventSearchFilters/>
      </GridItem>
      <GridItem area="content" padding={10}>
        <Heading>Results For "{search}"</Heading>
        <Divider padding={2}/>
        <Divider padding={2} visibility="hidden"/>
        <EventsGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 4 }}
          spacing={{ base: 1, md: 5 }}
        />
      </GridItem>
    </Grid>
  );
};

export default EventSearchPage;
