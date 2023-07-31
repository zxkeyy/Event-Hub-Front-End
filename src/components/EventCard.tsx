import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Event } from "../hookers/useEvents"


interface Props{
    event: Event
}

const EventCard = ({event} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={ event.image} />
        <CardBody>
            <Heading fontSize='xl'>
                {event.name}
            </Heading>
        </CardBody>
    </Card>
  )
}

export default EventCard