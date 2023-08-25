import { Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import EventsGrid from "../components/EventsGrid";
import EventSearchFilters from "../components/EventSearchFilters";
import useEventQueryStore from "../store";

const EventSearchPage = () => {
  const search = useEventQueryStore((s) => s.eventQuery.search);

  return (
    <Grid
      templateAreas={{ base: '"filters" "content"', md: '"filters content"' }}
      templateColumns={{ base: "1fr", md: "0.3fr 1fr" }}
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
    >
      <GridItem area="filters" padding={{ base: 3, md: 3, lg: 5, xl: 10 }}>
        <EventSearchFilters />
      </GridItem>
      <GridItem
        area="content"
        margin={{ base: 3, md: 3, lg: 5, xl: 10 }}
        marginLeft={{ base: 3, md: 0, lg: 0, xl: 0 }}
        padding={{ base: 3, md: 3, lg: 5, xl: 10 }}
        border="1px"
        borderColor="gray.600"
        borderRadius={15}
        bgColor="purple.900"
      >
        <Heading>Results For "{search}"</Heading>
        <Divider padding={2} />
        <Divider padding={2} visibility="hidden" />
        <EventsGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing={{ base: 5, md: 3, lg: 3, xl: 5 }}
        />
      </GridItem>
    </Grid>
  );
};

export default EventSearchPage;
