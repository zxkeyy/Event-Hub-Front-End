import { SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hookers/useEvents";
import EventCard from "./EventCard";
import EventCardSkeleton from "./EventCardSkeleton";
import { Category } from "../hookers/useCategories";

interface Props{
  selectedWilaya: number | null
  selectedCategory: Category | null
}

const EventsGrid = ({selectedWilaya, selectedCategory}: Props) => {
  const { data: events, error, isLoading } = useEvents(selectedWilaya, selectedCategory);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4, xl: 5 }}
        spacing={{base:1, md: 5}}
      >
        {isLoading &&
          skeletons.map((skeleton) => <EventCardSkeleton key={skeleton} />)}
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </SimpleGrid>

      {events.length === 0 && isLoading === false && <Text>No events to show here.</Text>}
    </>
  );
};

export default EventsGrid;
