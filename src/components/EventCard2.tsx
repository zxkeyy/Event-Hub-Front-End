import {
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Event } from "../hookers/useEvents";
import { Link } from "react-router-dom";
import fallBackImage from "../assets/image-not-found.png";
import parseDate from "../services/parse-date";
import { FaShare } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

interface Props {
  event: Event;
}

const EventCard2 = ({ event }: Props) => {
  const bgColor = useColorModeValue("white", "purple.900");
  const borderColor = useColorModeValue("gray.300", "gray.800");

  return (
    <Link to={"/events/" + event.slug}>
      <Card
        bgColor={bgColor}
        border="1px"
        borderRadius={10}
        borderColor={borderColor}
        overflow="hidden"
        shadow="md"
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
            templateAreas={`"date date" "title title" "location location" "primary secondary"`}
            templateColumns={"1fr 0.02fr"}
            paddingTop={0}
          >
            <GridItem area="title" height={79}>
              <Text fontSize="xs" color="">
                {parseDate(event.start_date, event.end_date).toUpperCase()}
              </Text>
              <Heading size="md" fontSize="md" noOfLines={2}>
                {event.name}
              </Heading>
              <Text fontSize="xs" color="gray.500" noOfLines={1}>
                {event.location_name}
              </Text>
            </GridItem>
            <GridItem area="date"></GridItem>
            <GridItem area="location">
              <Divider />
            </GridItem>
            <GridItem area="primary" padding={2}>
              <Button
                width="full"
                colorScheme="purple"
                fontSize="sm"
                bgColor="purple.400"
                leftIcon={<BsStar />}
              >
                Intrested
              </Button>
            </GridItem>
            <GridItem area="secondary" padding={2}>
              <Button
                width="full"
                colorScheme="purple"
                fontSize="sm"
                bgColor="purple.400"
              >
                <FaShare />
              </Button>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Link>
  );
};

export default EventCard2;
