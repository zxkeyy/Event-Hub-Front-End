import { Text } from '@chakra-ui/react';
import useEvents from '../hookers/useEvents';

const EventsGrid = () => {
    const {events, error } = useEvents()    
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {events.map(event => <li key={event.id}>{event.name}</li>)}
    </ul>
    </>
  )
}

export default EventsGrid