import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import useUser from "../hookers/useUser";
import Auth from "../services/Auth";

const NavBar = () => {
  const user = useUser();

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
      <Link to="/create-event" content="fit">
        <Button variant="ghost" fontSize="xs">
          Create Event
        </Button>
      </Link>
      {!Auth.getToken() && (
        <>
          <Link to="/login" content="fit">
            <Button variant="ghost" fontSize="xs">
              LOG IN {!user?.isLoading && !user?.error && user?.data.username}
            </Button>
          </Link>
          <Text fontSize="xs" fontWeight="bold" textColor="gray.300">
            or
          </Text>
          <Link to="/register" content="fit">
            <Button variant="ghost" fontSize="xs">
              SIGN UP
            </Button>
          </Link>
        </>
      )}
      {Auth.getToken() && (
        <Menu>
          <MenuButton as={Button} variant="link" fontSize="xs">
            {!user?.isLoading && !user?.error && user?.data.username}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuDivider />
              <Link to="/profile" content="fit">
                <MenuItem>Account</MenuItem>
              </Link>
              <Link to="/my-events" content="fit">
                <MenuItem>My Events</MenuItem>
              </Link>
              <Link to="/logout" content="fit">
                <MenuItem>Log out </MenuItem>
              </Link>
            </MenuGroup>
          </MenuList>
        </Menu>
      )}

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
