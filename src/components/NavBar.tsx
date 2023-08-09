import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack bgColor="purple.800" padding={2}>
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchField />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
