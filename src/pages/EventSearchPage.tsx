import { Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import EventsGrid from "../components/EventsGrid";
import EventSearchFilters from "../components/EventSearchFilters";
import useEventQueryStore from "../store";

const EventSearchPage = () => {
  const search = useEventQueryStore((s) => s.eventQuery.search);

  return (
    <Grid
      templateAreas={'"filters content"'}
      templateColumns={"0.3fr 1fr"}
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
    >
      <GridItem area="filters" padding={10}>
        <EventSearchFilters />
      </GridItem>
      <GridItem
        area="content"
        marginTop={10}
        marginRight={10}
        padding={10}
        border="1px"
        borderColor="gray.600"
        borderRadius={15}
        bgColor="purple.900"
      >
        <Heading>Results For "{search}"</Heading>
        <Divider padding={2} />
        <Divider padding={2} visibility="hidden" />
        <EventsGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 4 }}
          spacing={{ base: 1, md: 5 }}
        />
      </GridItem>
    </Grid>
  );
};

export default EventSearchPage;
