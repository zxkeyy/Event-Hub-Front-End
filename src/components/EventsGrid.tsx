import { SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hookers/useEvents";
import EventCard from "./EventCard";
import useClubs from "../hookers/useClubs";

const EventsGrid = () => {
  const { events, error } = useEvents();
  const {clubs} = useClubs()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 5}} spacing={10} padding='10px'>
        {events.map((event) => (
          <EventCard key={event.id} event={event} clubs={clubs}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventsGrid;
