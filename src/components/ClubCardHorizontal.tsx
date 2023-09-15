import {
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Club } from "../hookers/useClubs";
import { BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import fallBackImage from "../assets/image-not-found.png";

interface Props {
  club: Club;
  onDelete: () => void;
  onShare: () => void;
}
const ClubCardHorizontal = ({ club, onDelete, onShare }: Props) => {
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
          src={club.image}
          fallbackSrc={fallBackImage}
        />
        <CardBody padding={3}>
          <Grid
            templateAreas={`"title primary" "title secondary"`}
            templateColumns={"1fr 0.2fr"}
            paddingTop={0}
          >
            <GridItem area="title" paddingY={5}>
              <LinkOverlay href={"/hosts/" + club.id}>
                <Heading size="md" fontSize="md" noOfLines={2}>
                  {club.name}
                </Heading>
              </LinkOverlay>
              <Text marginTop={5} fontSize="sm" color="gray.500" noOfLines={2}>
                {club.description}
              </Text>
            </GridItem>
            <GridItem area="primary" padding={2}>
              <Link href={"/hosts/" + club.id + "/edit"}>
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
                      Delete host
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

export default ClubCardHorizontal;
