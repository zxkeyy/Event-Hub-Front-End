import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack bgColor="purple.800" padding={2} position="sticky" top="0" zIndex={9999999}>
      <Box boxSize="60px" minWidth="60px">
        <Link to="/" content="fit">
          <Image src={logo} boxSize="60px" />
        </Link>
      </Box>

      <SearchField />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
