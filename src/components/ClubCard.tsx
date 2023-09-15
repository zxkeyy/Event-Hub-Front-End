import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import useClub from "../hookers/useClub";

interface Props {
  clubId: number;
}

const ClubCard = ({ clubId }: Props) => {
  const { data: club } = useClub(clubId);

  return (
    <LinkOverlay>
      <Box
        border="1px"
        borderRadius={15}
        borderColor="whiteAlpha.200"
        bgColor="purple.900"
        padding={5}
        marginTop={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
        boxShadow="2xl"
      >
        <Avatar size="2xl" src={club?.image} />
        <Text fontWeight="bold" padding={2}>
          {club?.name}
        </Text>
        <Divider />
        <Link href={"/hosts/" + club?.id} width="full">
          <Button
            width="full"
            colorScheme="purple"
            fontSize="sm"
            bgColor="purple.400"
            marginTop={2}
          >
            See more
          </Button>
        </Link>
      </Box>
    </LinkOverlay>
  );
};

export default ClubCard;
