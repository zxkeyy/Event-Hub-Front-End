import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import useUser from "../hookers/useUser";

const NavBar = () => {
  const user = useUser();
  //{!isLoading && user.username}
  return (
    <HStack
      bgColor="purple.800"
      padding={2}
      position="sticky"
      top="0"
      zIndex={9999999}
    >
      <Box boxSize="40px" minWidth="40px">
        <Link to="/" content="fit">
          <Image src={logo} boxSize="40px" />
        </Link>
      </Box>

      <SearchField />

      <Button variant="ghost" fontSize="xs">
        LOG IN {!user?.isLoading && !user?.error && user?.data.username}
      </Button>
      <Text fontSize="xs" fontWeight="bold" textColor="gray.300">
        or
      </Text>
      <Button variant="ghost" fontSize="xs">
        SIGN UP
      </Button>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
