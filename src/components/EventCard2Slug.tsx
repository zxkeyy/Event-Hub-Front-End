import {
  LinkBox,
  Card,
  CardBody,
  Grid,
  GridItem,
  LinkOverlay,
  Heading,
  Divider,
  Button,
  Text,
  Image,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import parseDate from "../services/parse-date";
import useEvent from "../hookers/useEvent";
import fallBackImage from "../assets/image-not-found.png";

interface Props {
  slug: string;
}

const EventCard2Slug = ({ slug }: Props) => {
  const { data: event } = useEvent(slug);
  const toast = useToast();
  const bgColor = useColorModeValue("white", "purple.900");
  const borderColor = useColorModeValue("gray.300", "gray.800");

  if (!event) return null;

  return (
    <LinkBox>
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
            templateColumns={"1fr 0fr"}
            paddingTop={0}
          >
            <GridItem area="title" height={79}>
              <Text fontSize="xs" color="">
                {parseDate(event.start_date, event.end_date).toUpperCase()}
              </Text>
              <LinkOverlay href={"/events/" + event.slug}>
                <Heading size="md" fontSize="md" noOfLines={2}>
                  {event.name}
                </Heading>
              </LinkOverlay>
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
                onClick={() => {
                  navigator.clipboard.writeText(
                    window.location.host + "/events/" + event.slug
                  );
                  toast({
                    title: "Link Copied.",

                    position: "bottom-right",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              >
                <FaShare />
              </Button>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default EventCard2Slug;
