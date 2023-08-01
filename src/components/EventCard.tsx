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
import DateIcon from "./DateIcon";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <Card borderRadius={0} width={300} overflow="hidden">
      <Image aspectRatio={3 / 2} src={event.image} />
      <CardBody padding={0}>
        <Grid
          templateAreas={`"date title" "date location" "description description"`}
          templateColumns={"100px 1fr"}
          paddingTop={5}
        >
          <GridItem area="title">
            <Heading fontSize="xl">{event.name}</Heading>
          </GridItem>
          <GridItem area="date">
            <DateIcon date={event.start_date} />
          </GridItem>
          <GridItem area="location">
            <Text fontSize="md" color="gray">
              {event.location_name}
            </Text>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default EventCard;
