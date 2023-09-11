import {
  useColorModeValue,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Button,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import parseDate from "../services/parse-date";
import { Event } from "../hookers/useEvents";
import fallBackImage from "../assets/image-not-found.png";
import { BiEdit } from "react-icons/bi";

interface Props {
  event: Event;
  onDelete: () => void;
  onShare: () => void;
}

const EventCardHorizontal = ({ event, onDelete, onShare }: Props) => {
  const bgColor = useColorModeValue("white", "purple.900");
  const borderColor = useColorModeValue("gray.300", "gray.800");

  return (
    <LinkBox width="100%">
      <Card
        width="100%"
        direction="row"
        bgColor={bgColor}
        border="1px"
        borderRadius={10}
        borderColor={borderColor}
        overflow="hidden"
        shadow="md"
        _hover={{
          transform: "scale(1.005)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image
          aspectRatio={1 / 1}
          boxSize={40}
          src={event.image}
          fallbackSrc={fallBackImage}
        />
        <CardBody padding={3}>
          <Grid
            templateAreas={`"title primary" "title secondary"`}
            templateColumns={"1fr 0.2fr"}
            paddingTop={0}
          >
            <GridItem area="title" paddingY={5}>
              <Text fontSize="sm">
                {parseDate(event.start_date, event.end_date).toUpperCase()}
              </Text>
              <LinkOverlay href={"/events/" + event.slug}>
                <Heading size="md" fontSize="md" noOfLines={2}>
                  {event.name}
                </Heading>
              </LinkOverlay>
              <Text fontSize="sm" color="gray.500" noOfLines={2}>
                {event.location_name}
              </Text>
            </GridItem>
            <GridItem area="primary" padding={2}>
              <Link href={"/events/" + event.slug + "/edit"}>
                <Button
                  width="full"
                  colorScheme="purple"
                  fontSize="sm"
                  bgColor="purple.400"
                  leftIcon={<BiEdit />}
                >
                  edit
                </Button>
              </Link>
            </GridItem>
            <GridItem area="secondary" padding={2}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<BsThreeDots />}
                  width="full"
                  colorScheme="purple"
                  fontSize="sm"
                  bgColor="purple.400"
                ></MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem onClick={() => onShare()}>Share</MenuItem>
                    <MenuItem
                      onClick={() => {
                        onDelete();
                      }}
                    >
                      Delete Event
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default EventCardHorizontal;
