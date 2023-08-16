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
        borderRadius={10}
        overflow="hidden"
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
            templateAreas={`"title title" "date date" "description description"`}
            templateColumns={"0.5fr 1fr"}
            paddingTop={5}
          >
            <GridItem area="title">
              <Heading size="md">{event.name}</Heading>
            </GridItem>
            <GridItem area="date">
              <Text color="gray.600">{parseDate(event.start_date)}</Text>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Link>
  );
};

export default EventCard2;
