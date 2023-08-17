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
import { Link } from "react-router-dom";
import fallBackImage from "../assets/image-not-found.png";
import parseDate from "../services/parse-date";

interface Props {
  event: Event;
}

const EventCard2 = ({ event }: Props) => {
  return (
    <Link to={"/events/" + event.slug}>
      <Card
        bgColor="purple.900"
        borderRadius={10}
        overflow="hidden"
        boxShadow="2xl"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image
          aspectRatio={1 / 1}
          src={event.image}
          fallbackSrc={fallBackImage}
        />
        <CardBody padding={3}>
          <Grid
            templateAreas={`"date date" "title title" "description description"`}
            templateColumns={"0.5fr 1fr"}
            paddingTop={0}
          >
            <GridItem area="title">
              <Heading size="md">{event.name}</Heading>
            </GridItem>
            <GridItem area="date">
              <Text fontSize="xs" color="">{parseDate(event.start_date, event.end_date).toUpperCase()}</Text>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Link>
  );
};

export default EventCard2;
