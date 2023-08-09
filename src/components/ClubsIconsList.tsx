import { Club } from "../hookers/useClubs";
import { HStack, Image } from "@chakra-ui/react";

interface Props {
  clubIds: number[];
  clubs: Club[];
}

const ClubsIconsList = ({ clubIds, clubs }: Props) => {
  return (
    <HStack>
      {clubIds.map((clubId) =>
        clubs
          .filter((club) => club.id === clubId)
          .map((club) => (
            <Image
              margin="0 auto"
              boxSize={10}
              borderRadius={100}
              overflow="hidden"
              src={club.image}
            />
          ))
      )}
    </HStack>
  );
};

export default ClubsIconsList;
