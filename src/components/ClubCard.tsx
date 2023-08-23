import { Avatar, Box, Button, Divider, Text } from "@chakra-ui/react";
import useClub from "../hookers/useClub";

interface Props {
  clubId: number;
}

const ClubCard = ({ clubId }: Props) => {
  const { data: club } = useClub(clubId);

  return (
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
    >
      <Avatar size="2xl" src={club?.image} />
      <Text fontWeight="bold" padding={2}>{club?.name}</Text>
      <Divider />
      <Button
        width="full"
        colorScheme="purple"
        fontSize="sm"
        bgColor="purple.400"
        marginTop={2}
      >
        See more
      </Button>
    </Box>
  );
};

export default ClubCard;
