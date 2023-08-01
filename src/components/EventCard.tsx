import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Event } from "../hookers/useEvents";
import { Club } from "../hookers/useClubs";
import { parseDate } from "../services/parse-date";
import DateIcon from "./DateIcon";

interface Props {
  event: Event;
  clubs: Club[];
}

const EventCard = ({ event, clubs }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image aspectRatio={3 / 2} src={event.image} />
      <CardBody padding={0}>
        <Grid
          templateAreas={`"date title" "date location" "description description"`}
          templateColumns={'100px 1fr'}
          paddingTop={5}
        >
          <GridItem  area="title">
            <Heading fontSize='xl'>{event.name}</Heading>
          </GridItem>
          <GridItem area="date">
            <DateIcon date={event.start_date}/>
          </GridItem>
          <GridItem area="location">
            <Text fontSize='md' color='gray'>{event.location_name}</Text>
          </GridItem>

        </Grid>
      </CardBody>
    </Card>
  );
};

export default EventCard;
