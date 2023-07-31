import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Event } from "../hookers/useEvents"
import ClubsIconsList from "./ClubsIconsList"
import { Club } from "../hookers/useClubs"
import { parseDate } from "../services/parse-date"


interface Props{
    event: Event
    clubs: Club[]
}

const EventCard = ({event, clubs} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={ event.image} />
        <CardBody>
            <Heading fontSize='xl'>
                {event.name}    
            </Heading>
            <Text color='orange.600'>{parseDate(event.event_start_date)}</Text>
            <Text color='gray'>{parseDate(event.location)}</Text>
        </CardBody>
    </Card>
  )
}

export default EventCard