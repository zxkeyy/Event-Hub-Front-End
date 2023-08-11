import { Avatar, Box, Center, HStack, Heading, Text } from "@chakra-ui/react";
import { Club } from "../hookers/useClubs";
import { useState } from "react";
import useClub from "../hookers/useClub";

interface Props {
  organizerIds: number[];
}
const OrganizersInfo = ({ organizerIds }: Props) => {
  const [organizers, setOrganizers] = useState<Club[]>([]);

  for (const id of organizerIds) {
    const club = useClub(id).data;
    if (club && !organizers.includes(club)) {
      setOrganizers([...organizers, club]);
    }
  }

  return (
    <Box border="1px" borderColor="gray.600" borderRadius={10} padding={5}>
      <Heading fontSize="md">Organized By:</Heading>
      <Center padding={2}>
        <HStack>
          {organizers.map((organizer, index) => (
            <Box
              bgColor={"purple.800"}
              borderRadius={"full"}
              boxSize="fit-content"
              paddingX={4}
              paddingY={2}
              key={index}
            >
              <HStack>
                <Avatar src={organizer.image} boxSize={8} />
                <Text>{organizer.name}</Text>
              </HStack>
            </Box>
          ))}
        </HStack>
      </Center>
    </Box>
  );
};

export default OrganizersInfo;
