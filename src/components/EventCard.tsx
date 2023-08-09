import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Event } from "../hookers/useEvents";
import DateIcon from "./DateIcon";
import { Link } from "react-router-dom";
import fallBackImage from "../assets/image-not-found.png"

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <Link to={"/events/" + event.slug}>
      <Card
        borderRadius={0}
        overflow="hidden"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image aspectRatio={2 / 1} src={event.image} fallbackSrc={fallBackImage}/>
        <CardBody padding={0}>
          <Grid
            templateAreas={`"date title" "date location" "description description"`}
            templateColumns={"0.5fr 1fr"}
            paddingTop={5}
          >
            <GridItem area="title">
              <Heading fontWeight="black" fontSize="md">
                {event.name}
              </Heading>
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
    </Link>
  );
};

export default EventCard;
