import { SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hookers/useEvents";
import EventCard from "./EventCard";
import useClubs from "../hookers/useClubs";
import EventCardSkeleton from "./EventCardSkeleton";

const EventsGrid = () => {
  const { events, error, isLoading } = useEvents();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 5}} spacing={10} padding='10px'>
        {isLoading && skeletons.map(skeleton => <EventCardSkeleton key={skeleton}/>)}
        {events.map((event) => (
          <EventCard key={event.id} event={event}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventsGrid;
