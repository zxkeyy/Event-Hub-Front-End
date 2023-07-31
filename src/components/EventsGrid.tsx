import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Event{
    id: number,
    name: string,
}

interface GetEventsResponse{
    count: number,
    results: Event[],
}

const EventsGrid = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<GetEventsResponse>('/events.json')
            .then(res => setEvents(res.data.results))
            .catch(err => setError(err.message))
    }, [])
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