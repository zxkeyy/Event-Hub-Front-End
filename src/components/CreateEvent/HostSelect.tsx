import {
  Box,
  Button,
  CloseButton,
  Divider,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown, BsPlusLg } from "react-icons/bs";
import useUser from "../../hookers/useUser";
import useClubs from "../../hookers/useClubs";

interface Props {
  hosts: number[];
  setHosts: (hosts: number[]) => void;
  error: boolean;
}

export const HostSelect = ({ hosts, setHosts, error }: Props) => {
  const userId = useUser()?.data.id;
  const { data: clubs } = useClubs({ owner: userId });

  return (
    <Menu matchWidth>
      <MenuButton
        as={Button}
        border={error ? "2px" : "1px"}
        borderColor={error ? "red.300" : "whiteAlpha.300"}
        rightIcon={<BsChevronDown />}
        variant="outline"
        textAlign="start"
        width="100%"
        overflow="hidden"
        fontWeight="normal"
      >
        Add a host
      </MenuButton>
      <MenuList maxHeight={300} overflowY="scroll" zIndex={99999}>
        {clubs &&
          clubs.results.map((club) => (
            <MenuItem
              key={club.id}
              onClick={() => {
                if (!hosts.includes(club.id)) setHosts([...hosts, club.id]);
              }}
            >
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={club.image}
                alt="Simon the pensive"
                mr="12px"
              />
              <span>{club.name}</span>
            </MenuItem>
          ))}
        <Divider />
        <Link href="/create-host" isExternal>
          <MenuItem icon={<BsPlusLg />}>Add a new host</MenuItem>
        </Link>
      </MenuList>
      {hosts.map((hostId) => {
        const host = clubs?.results.find((club) => club.id === hostId);
        if (host)
          return (
            <Box
              key={hostId}
              padding={3}
              marginTop={2}
              border="1px"
              borderRadius={15}
              borderColor="whiteAlpha.300"
            >
              <HStack display="flex" justifyContent="space-between">
                <HStack>
                  <Image
                    boxSize="3rem"
                    borderRadius="full"
                    src={host.image}
                    alt="Simon the pensive"
                    mr="12px"
                  />
                  <span>{host.name}</span>
                </HStack>

                <CloseButton
                  onClick={() =>
                    setHosts([...hosts.filter((id) => hostId != id)])
                  }
                />
              </HStack>
            </Box>
          );
      })}
    </Menu>
  );
};

export default HostSelect;
