import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hookers/useEvents";
import EventCard from "./EventCard";
import EventCardSkeleton from "./EventCardSkeleton";

interface Props {
  columns: {};
  spacing: {};
}

const EventsGrid = ({ columns, spacing }: Props) => {
  const { data: events, isLoading } = useEvents();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <SimpleGrid columns={columns} spacing={spacing}>
        {isLoading &&
          skeletons.map((skeleton) => <EventCardSkeleton key={skeleton} />)}
        {events?.results.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </SimpleGrid>

      {events?.results.length === 0 && isLoading === false && (
        <Box padding={10}>
          <Text fontSize="xl" fontWeight="bold">Sorry we couldn't find any events to show here.</Text>
        </Box>
      )}
    </>
  );
};

export default EventsGrid;
